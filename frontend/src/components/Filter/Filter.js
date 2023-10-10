import React from 'react';
import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
  toggleFaforite,
  selectFaforiteFilter,
} from '../../redux/slices/filterSlice';

function Filter() {
  let dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const faforiteFilter = useSelector(selectFaforiteFilter);
  console.log(authorFilter);
  function handleToggleCheckbox(e) {
    dispatch(toggleFaforite());
  }
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
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              onChange={handleToggleCheckbox}
              checked={faforiteFilter}
            ></input>
            Only favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
