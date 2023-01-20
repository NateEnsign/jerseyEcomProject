import React, { useContext, useState, useEffect } from "react";
import styles from "./CartScreen.module.css";
import axios from "axios";
import AuthContext from "../store/authContext";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  const { userId } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  const getCart = () => {
    axios
      .get(`/cart/${userId}`)
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log("cannot get cart");
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  const cartItemDisplay = items.map((cartItem, index) => {
    return <CartItem jersey={cartItem} />;
  });

  return (
    <div className={styles.main}>
      <div className={styles.itemContainer}>
        <div>Cart</div>
        <div>{cartItemDisplay}</div>
      </div>
    </div>
  );
};

export default CartScreen;
