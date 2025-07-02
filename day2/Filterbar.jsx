import React from "react";
import "./Filterbar.css";


function resetSearch () { 
  document.querySelector('.search-bar input').value = '';
}


const FilterBar = ({
  searchValue,
  onSearchChange,
  onSearchSubmit,
  categoryValue,
  onCategoryChange,
  sortvalue,
  onSortChange,
  onReset,
}) => {
  return (
    <section className="filter-bar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        
        <button className="search-btn" onClick={onSearchSubmit} > 
          Search
        </button>
      </div>
      <br />

      <div className="filter">
        <label htmlFor="category">Filter by Category:</label>
        <select
          value={categoryValue}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Books">Books</option>
          <option value="Apparel">Apparel</option>
        </select>

        <select
          value={sortvalue}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>

        <button className="reset-btn" onClick={onReset}>
          Reset Filters
        </button>
      </div>
    </section>
  );
};

export default FilterBar;
