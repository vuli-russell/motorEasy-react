import React, { useState, useEffect } from "react";
// import styles from "./App.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import TyreList from "./components/TyreList";
import { getTyres } from "./services/apiService";
import showToast from "./services/showToastService";

function App() {
  const [ tyreData, setTyreData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1); 
  const [ searchStr, setSearchStr ] = useState(null);
  const [ hasSearched, setHasSearched ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    if(hasSearched){
      setIsLoading(true)
      getTyres(searchStr,currentPage).then(data => {
        setIsLoading(false)
        if(data==="error"){
          showToast("Error Fetching Data");
        }else {
          if(data.length===0){
            showToast(currentPage===1 ? "No Tyres Found" : "No more Items To Load");
          }
          if(currentPage===1){
            setTyreData(data)
          }else {
            setTyreData(t => [...t,...data])
          }
        }
      })
    }
  }, [searchStr,currentPage])

  return (
    <>
      <Header />
      <Search setSearchStr={setSearchStr} setHasSearched={setHasSearched} setCurrentPage={setCurrentPage} hasSearched={hasSearched}/>
      {hasSearched ? <TyreList tyreData={tyreData} currentPage={currentPage} setCurrentPage={setCurrentPage} isLoading={isLoading}/> : null}
    </>
  );
}

export default App;
