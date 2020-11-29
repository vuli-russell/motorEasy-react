import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const { setSearchStr, setHasSearched, setCurrentPage } = props;

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Search by size or name
          <input type="text" onChange={handleSearchInput} />
        </label>
        {/* might cahnge search to be on change, depending on performance */}
        <input type="submit" value="Search"/>
      </form>
    </div>
  );
};

export default Search;
