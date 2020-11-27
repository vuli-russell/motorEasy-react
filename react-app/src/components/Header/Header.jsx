import React, { useState } from "react";
import styles from "./Header.module.scss";
import { getTyres } from "../../services/apiService";

const Header = (props) => {
  const { setTyreData } = props;

  const [searchInputValue, setSearchInputValue] = useState("")
   
  const handleSearchInput = e => {
    setSearchInputValue(e.target.value)
  }

  const handleSearchClick = async () => {
    setTyreData(await getTyres(searchInputValue));
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
