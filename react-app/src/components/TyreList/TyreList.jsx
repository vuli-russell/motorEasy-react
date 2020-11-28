import React from "react";
import styles from "./TyreList.module.scss";
import TyreCard from "./TyreCard";

const TyreList = (props) => {
  const { tyreData } = props;
  return (
    <div>
      {tyreData.length ? tyreData.map(tyre => <TyreCard key={tyre.id} tyre={tyre} />) : <p>No Tyres Found</p>}
    </div>
  );
};

export default TyreList;
