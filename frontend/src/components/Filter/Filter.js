import React from 'react';
import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
} from '../../redux/slices/filterSlice';

function Filter() {
  let dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  console.log(authorFilter);

  function handleTitlelFilterChange(e) {
    dispatch(setTitleFilter(e.target.value));
  }

  function handleAithorFilterChange(e) {
    dispatch(setAuthorFilter(e.target.value));
  }
  function handleResetFilters() {
    dispatch(resetFilters());
  }
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="filter by type..."
            onChange={handleTitlelFilterChange}
            value={titleFilter}
          ></input>
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="filter by author..."
            onChange={handleAithorFilterChange}
            value={authorFilter}
          ></input>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
