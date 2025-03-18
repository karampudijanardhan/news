import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for news..."
        onChange={(e) => onSearch(e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;