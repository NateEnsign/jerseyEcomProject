import React from 'react'
import styles from "./JerseyCard.module.css";

const JerseyCard = ({jersey}) => {
  return (
    <div className={styles.jerseyCard}>
        <img className={styles.jerseyPhoto} src={jersey.photo} alt='' />
        <h3 className={styles.jerseyName}>{jersey.name}</h3>
        <h4 className= {styles.jerseyPrice}>${jersey.price}</h4>
        <button className={styles.cardBtn}>Buy Now</button>
    </div>
  )
}

export default JerseyCard
