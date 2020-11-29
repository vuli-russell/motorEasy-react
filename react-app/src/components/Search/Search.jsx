import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const { setSearchStr, setHasSearched, setCurrentPage, hasSearched } = props;

  const [searchInputValue, setSearchInputValue] = useState("")
   
  const handleSearchInput = e => {
    setSearchInputValue(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchStr(searchInputValue)
    setHasSearched(true)
    setCurrentPage(1)
  } 

  return (
    <div className={`${styles.searchBar} ${hasSearched ? styles.searched : null}`}>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search" >Search by Tyre Size or Name:</label>
        <input type="text" id="search" placeholder="Search..." onChange={handleSearchInput} />
        {/* might change search to be on change, depending on performance */}
        <input className={styles.button} type="submit" value="Search"/>
      </form>
    </div>
  );
};

export default Search;
