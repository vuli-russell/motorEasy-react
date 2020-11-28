import React from "react";
import styles from "./TyreCard.module.scss";

const TyreCard = (props) => {
  const { brand, size } = props.tyre
  return (
    <div>
      <h1>{brand}</h1>
      <h1>{size}</h1>
    </div>
  );
};

export default TyreCard;
