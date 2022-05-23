import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, selectSearchTerm } from '../../redux/stocks/searchSlice';
import '../assets/search.css';

export default function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = ({ target }) => {
    const { value } = target;
    dispatch(setSearchTerm(value));
  };

  return (
    <div id="search-container" className="mx-auto flex items-center">
      <input
        className="w-5/6 mx-auto my-8 h-10 p-4 text-xl text text-mainblue sm:w-3/5"
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="Search"
      />
    </div>
  );
}
