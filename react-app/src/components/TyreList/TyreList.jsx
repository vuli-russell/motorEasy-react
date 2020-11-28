import React from "react";
import styles from "./TyreList.module.scss";
import TyreCard from "./TyreCard";

const TyreList = (props) => {
  const { tyreData, currentPage, setCurrentPage } = props;

  const handleLoadMoreClick = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div>
      {tyreData.length ? 
        <>
          {tyreData.map(tyre => <TyreCard key={tyre._id} tyre={tyre} />)}
          <button onClick={handleLoadMoreClick}>Load More</button>
        </>
      :
        <p>No Tyres Found</p>}
    </div>
  );
};

export default TyreList;
