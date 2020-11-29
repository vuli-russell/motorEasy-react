import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header = (props) => {

  return (
    <header className={styles.header}>
      <h1>Tyre List</h1>
    </header>
  );
};

export default Header;
