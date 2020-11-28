import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const { setSearchStr, setHasSearched, setCurrentPage } = props;

  const [searchInputValue, setSearchInputValue] = useState("")
   
  const handleSearchInput = e => {
    setSearchInputValue(e.target.value)
  }

  const handleSearchClick = () => {
    setSearchStr(searchInputValue)
    setHasSearched(true)
    setCurrentPage(1)
  }

  return (
    <div>
      <label>
        Search by size or name
        <input type="text" onChange={handleSearchInput} />
      </label>
      {/* might cahnge search to be on change, depending on performance */}
      <button onClick={handleSearchClick} >Search</button>
    </div>
  );
};

export default Search;
