import React, { useState } from 'react';

const ProductFilter = ({ products, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedRating, setSelectedRating] = useState('');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilterChange({ category, priceRange, rating: selectedRating });
  };

  const handlePriceChange = (event, type) => {
    const value = event.target.value;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [type]: value,
    }));
    onFilterChange({ category: selectedCategory, priceRange, rating: selectedRating });
  };

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    setSelectedRating(rating);
    onFilterChange({ category: selectedCategory, priceRange, rating });
  };

  return (
    <div>
      <label>
        Category:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          {/* Add more categories as needed */}
        </select>
      </label>

      <label>
        Price Range:
        <input type="number" placeholder="Min" value={priceRange.min} onChange={(e) => handlePriceChange(e, 'min')} />
        <input type="number" placeholder="Max" value={priceRange.max} onChange={(e) => handlePriceChange(e, 'max')} />
      </label>

      <label>
        Rating:
        <select value={selectedRating} onChange={handleRatingChange}>
          <option value="">All</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
          {/* Add more ratings as needed */}
        </select>
      </label>
    </div>
  );
};

export default ProductFilter;
