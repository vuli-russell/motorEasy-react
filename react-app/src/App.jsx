import React, { useState } from "react";
// import styles from "./App.scss";
import Header from "./components/Header";
import TyreList from "./components/TyreList";

function App() {
  const [ tyreData, setTyreData ] = useState([])

  return (
    <>
      <Header setTyreData={setTyreData}/>
      <TyreList tyreData={tyreData} setTyreData={setTyreData}/>
    </>
  );
}

export default App;
