import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'your-mapbox-access-token';

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    map.current.on('click', (e) => {
      const newMarker = {
        id: Date.now(),
        lng: e.lngLat.lng,
        lat: e.lngLat.lat,
      };
      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
    });

    return () => map.current.remove();
  }, []);

  useEffect(() => {
    markers.forEach((marker) => {
      const el = document.createElement('div');
      el.className = 'marker';
      new mapboxgl.Marker(el)
        .setLngLat([marker.lng, marker.lat])
        .addTo(map.current);
    });
  }, [markers]);

  const removeMarker = (id) => {
    setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== id));
  };

  return (
    <div>
      <div ref={mapContainer} style={{ height: '400px', width: '100%' }} />

      <div>
        <h3>Markers</h3>
        <ul>
          {markers.map((marker) => (
            <li key={marker.id}>
              Latitude: {marker.lat.toFixed(4)}, Longitude: {marker.lng.toFixed(4)}
              <button onClick={() => removeMarker(marker.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Map;
