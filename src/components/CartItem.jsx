import axios from 'axios';
import React, {useContext} from "react";
import AuthContext from "../store/authContext";
import styles from "./CartItem.module.css";

const CartItem = ({ item, getCart }) => {
  const { userId } = useContext(AuthContext);

  const removeCartItemHandler = () => {

    axios
      .delete(`/cartItem/${item?.id}`)
      .then(() => {
        getCart(userId)
      })
      .catch((err) => {
        console.error(err);
        console.log('could not remove item from cart')
      });
  };
  
  return (
    <div className={styles.itemCard}>
      <img className={styles.jerseyPhoto} src={item?.jersey?.photo} alt="" />
      <h3 className={styles.jerseyName}>{item?.jersey?.name}</h3>
      <h4 className={styles.jerseyPrice}>${item?.jersey?.price}</h4>
      <button onClick={removeCartItemHandler} className={styles.removeBtn}>Remove Item</button>
    </div>
  );
};

export default CartItem;
