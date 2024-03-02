import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={goToPrevious}>Previous</button>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{ maxWidth: '400px', maxHeight: '300px' }}
        />
        <button onClick={goToNext}>Next</button>
      </div>    

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: '50px', height: '50px', margin: '0 5px', cursor: 'pointer' }}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;
