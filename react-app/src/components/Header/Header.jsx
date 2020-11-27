import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  const { setSearchString } = props;

  const [searchInputValue, setSearchInputValue] = useState("")
   
  const handleSearchInput = e => {
    setSearchInputValue(e.target.value)
  }

  const handleSearchClick = () => {
    setSearchString(searchInputValue);
  }

  return (
    <header>
      <h1>Tyre List</h1>
      <label>
        Search by size or name
        <input type="text" onChange={handleSearchInput} />
      </label>
      {/* search might be on change after, depending on performance */}
      <button onClick={handleSearchClick} >Search</button>
    </header>
  );
};

export default Header;
