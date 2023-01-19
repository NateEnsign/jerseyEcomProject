import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ jersey }) => {
  console.log(jersey);
  return (
    <div className={styles.itemCard}>
      <img className={styles.jerseyPhoto} src={jersey.jersey.photo} alt="" />
      <h3 className={styles.jerseyName}>{jersey.jersey.name}</h3>
      <h4 className={styles.jerseyPrice}>${jersey.jersey.price}</h4>
      <button>Remove</button>
    </div>
  );
};

export default CartItem;
