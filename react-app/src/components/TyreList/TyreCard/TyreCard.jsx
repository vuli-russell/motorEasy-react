import React from "react";
import styles from "./TyreCard.module.scss";

const TyreCard = (props) => {
  // console.log(props.tyre)
  const { brand, size, image, amazon_link, model, price, rating, title } = props.tyre 
  return (
    <div className={styles.tyreCard}>
      <div className={styles.imgDiv}>
        <img src={image} alt={title}/>
      </div>
      {rating.match(/^\d\.\d/)[0]}
      <div className={styles.titleDiv}>
        <h2>{title}</h2>
        <h2 className={styles.price}>{price}</h2>
      </div>
      <h2>Size: {size}</h2>
      <div className={styles.amazonLink}>
        <a href={amazon_link} target="_blank" rel="noopener noreferrer">Amazon Link</a>
      </div>
      
    </div>
  );
};

export default TyreCard;
