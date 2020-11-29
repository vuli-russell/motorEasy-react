import React from "react";
import styles from "./TyreCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faOutlineStar } from "@fortawesome/free-regular-svg-icons";

const TyreCard = (props) => {
  const { brand, size, image, amazon_link, model, price, title } = props.tyre;
  const rating = props.tyre.rating.match(/^\d\.\d/)[0];

  //This feels like a bad way to do this
  const starsJSX = new Array(5).fill(null).map((e,i) => <FontAwesomeIcon key={i} icon={faSolidStar} />);
  
  const fullStarsJSX = (
    <div className={styles.fullStars} style={{width: `${rating}em`}}>
      {starsJSX}
    </div>
  )

  const emptyStarsJSX = (
    <div className={styles.emptyStars}>
      {starsJSX}
    </div>
  )

  return (
    <div className={styles.tyreCard}>
      <div className={styles.imgDiv}>
        <img src={image} alt={title}/>
      </div>
      <div className={styles.starsDiv}>
        {fullStarsJSX}
        {emptyStarsJSX}
      </div>
      
      <div className={styles.titleDiv}>
        <h2>{title}</h2>
        <h2 className={styles.price}>{price}</h2>
      </div>
      <h2>Size: {size}</h2>
      <div className={styles.amazonLink}>
        <a className={styles.button} href={amazon_link} target="_blank" rel="noopener noreferrer">View on Amazon</a>
      </div>
      
    </div>
  );
};

export default TyreCard;
