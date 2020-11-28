import React, { useState, useEffect } from "react";
// import styles from "./App.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import TyreList from "./components/TyreList";
import { getTyres } from "./services/apiService";

function App() {
  const [ tyreData, setTyreData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1); 
  const [ searchStr, setSearchStr ] = useState(null);
  const [ hasSearched, setHasSearched ] = useState(false)

  useEffect(() => {
    if (hasSearched){
      getTyres(searchStr,currentPage).then(data => {setTyreData(data)})
    }
  }, [searchStr])

  useEffect(() => {
    if (hasSearched){
      getTyres(searchStr,currentPage).then(data => {setTyreData([...tyreData,...data])})
    }
  }, [currentPage])

  return (
    <>
      <Header />
      <Search setSearchStr={setSearchStr} setHasSearched={setHasSearched}/>
      <TyreList tyreData={tyreData} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
