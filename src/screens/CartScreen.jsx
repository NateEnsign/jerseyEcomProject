// import React, { useContext, useState, useEffect } from "react";
// import styles from "./CartScreen.module.css";
// import axios from "axios";
// import AuthContext from "../store/authContext";
// import CartItem from "../components/CartItem";

// const CartScreen = () => {
//   const { userId } = useContext(AuthContext);
//   const [items, setItems] = useState([]);

//   const getCart = () => {
//     axios
//       .get(`/cart/${userId}`)
//       .then((res) => {
//         console.log(res.data);
//         setItems(res.data);
//       })
//       .catch((err) => {
//         console.error(err);
//         console.log("cannot get cart");
//       });
//   };

//   useEffect(() => {
//     getCart();
//   }, []);

//   const cartItemDisplay = items.map((cartItem, index) => {
//     return <CartItem jersey={cartItem} />;
//   });

//   return (
//     <div className={styles.main}>
//       <div className={styles.itemContainer}>
//         <div>Cart</div>
//         <div>{cartItemDisplay}</div>
//       </div>
//     </div>
//   );
// };

// export default CartScreen;

import React, { useContext, useState, useEffect, useCallback } from "react";
import styles from "./CartScreen.module.css";
import axios from "axios";
import AuthContext from "../store/authContext";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  const { userId } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [numCartItems, setNumCartItems] = useState("");

  const getCart = (id) => {
    axios
      .get(`/cart/${id}`)
      .then((res) => {
        console.log(res);
        setItems(res.data);
        setNumCartItems(res.data.length);
      })
      .catch((err) => {
        console.error(err);
        console.log("cannot get cart");
      });
  };

  const cartHasItems = numCartItems > 0;

  const totalAmount = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].jersey.price;
    }
    return total.toFixed(2);
  };

  useEffect(() => {
    getCart(userId);
  }, []);

  const cartItemDisplay = items.map((cartItem, index) => {
    return <CartItem item={cartItem} getCart={getCart} />;
  });

  return (
    <div className={styles.main}>
      <div className={styles.itemContainer}>
        <h2>Cart:</h2>
        <div>{cartItemDisplay}</div>
      </div>
      <div className={styles.checkOut}>
        <h4>Subtotal: ${totalAmount(items)}</h4>
        <button className={styles.checkOutBtn}>Checkout</button>
      </div>
    </div>
  );
};

export default CartScreen;
