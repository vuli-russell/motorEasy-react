import React from "react";
import styles from "./TyreList.module.scss";
import TyreCard from "./TyreCard";

const TyreList = (props) => {
  const { tyreData, currentPage, setCurrentPage } = props;

  const handleLoadMoreClick = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className={styles.tyreList}>
      {tyreData.length ? 
        <>
          <div className={styles.cardGallery}>
            {tyreData.map(tyre => <TyreCard key={tyre._id} tyre={tyre} />)}
          </div>
          <button className={styles.button} onClick={handleLoadMoreClick}>Load More</button>
        </>
      :
        <h2>No Tyres Found, Please try a different search</h2>}
    </div>
  );
};

export default TyreList;
