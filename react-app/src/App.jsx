import React, { useState } from "react";
// import styles from "./App.scss";
import Header from "./components/Header";
import TyreList from "./components/TyreList";

function App() {
  const [ searchString, setSearchString ] = useState(null)//should be null on load?
  const [ tyreData, setTyreData ] = useState(null)

  return (
    <>
      <Header setSearchString={setSearchString}/>
      <TyreList tyreData={tyreData}/>
    </>
  );
}

export default App;
