import React from "react";
import styles from "./CartItem.module.css";
import axios from 'axios'

const CartItem = ({ jersey, props }) => {

  const removeCartItemHandler = (cartItemId) => {
    axios
      .delete(`/cartItem/${cartItemId}`)
      .then(() => {
        props.getCart()
      })
      .catch((err) => {
        console.error(err);
        console.log('could not remove item from cart')
      });
  };
  
  return (
    <div className={styles.itemCard}>
      <img className={styles.jerseyPhoto} src={jersey.jersey.photo} alt="" />
      <h3 className={styles.jerseyName}>{jersey.jersey.name}</h3>
      <h4 className={styles.jerseyPrice}>${jersey.jersey.price}</h4>
      <button onClick={removeCartItemHandler} className={styles.removeBtn}>Remove Item</button>
    </div>
  );
};

export default CartItem;
