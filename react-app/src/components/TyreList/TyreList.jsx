import React from "react";
import styles from "./TyreList.module.scss";
import TyreCard from "./TyreCard";

const TyreList = (props) => {
  const { tyreData, currentPage, setCurrentPage, isLoading } = props;

  const handleLoadMoreClick = () => {
    setCurrentPage(currentPage + 1);
  }

  const getTyreListJSX = () => {
    if(tyreData.length){
      return(
        <>
          <div className={styles.cardGallery}>
            {tyreData.map(tyre => <TyreCard key={tyre._id} tyre={tyre} />)}
          </div>
          <button className={styles.button} onClick={handleLoadMoreClick}>Load More</button>
          <h2>{isLoading ? "Loading..." : null}</h2>
       </>
      )
    }else {
      return(
        <h2>{isLoading ? "Loading..." : "No Tyres Found, Please try a different search"}</h2>
      )
    }
  }


  return (
    <div className={styles.tyreList}>
      {getTyreListJSX()}
    </div>
  );
};

export default TyreList;
