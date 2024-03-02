import React, { useState, useEffect } from 'react';

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Adjust the number of items per page as needed
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Simulated API call with a delay
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        setData(result);
        setTotalPages(Math.ceil(result.length / itemsPerPage));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [itemsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {/* Display current page items */}
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => paginate(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
