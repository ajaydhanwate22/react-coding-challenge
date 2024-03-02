import React from 'react';
import SortableList from './component/SortableList';
import Navbar from './component/Navbar'
import Pagination from './component/Pagination'
import ImageCarousel from './component/ImageCarousel';
import Map from './component/Map' 
import './App.css'
import ProductFilter from './component/ProductFilter';

const App = () => {
  const images = [
    'https://images.unsplash.com/photo-1707327956851-30a531b70cda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1708546991069-6f615dc28057?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1708546991069-6f615dc28057?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8',

  ];
  return (
    <div>
      <Navbar />
      <h1>Sortable List</h1>
      <SortableList />
      <h1> Pagination Component with API Integration</h1>
      <Pagination/>
      <h1>Image Carousel</h1>
      <ImageCarousel images={images} />
      <h1>Interactive Map with Markers</h1>
      <Map/>
      <ProductFilter/>

    </div>
  );
};

export default App;




