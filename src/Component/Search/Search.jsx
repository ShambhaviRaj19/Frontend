import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Search.css'; // Import custom CSS file

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search using searchQuery
    // You can implement the search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="coursera-search-container">
      <h2>Search the courses...</h2>

      {/* Search form */}
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control mr-sm-2"
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {/* Popular categories */}
      <h3>POPULAR COURSES AT VTU</h3>
      <ul className="list-unstyled">
        <li>Computer Science and Engineering</li>
        <li>Information Science and Engineering</li>
        <li>Electronics and Communication Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Civil Engineering</li>
        <li>Electrical and Electronics Engineering</li>
      </ul>
    </div>
  );
}

export default Search;
