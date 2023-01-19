// import React, { useContext, useState } from "react";
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

//   const cartItemDisplay = items.map((cartItem, index) => {
//     return <CartItem cartItem={cartItem} />;
//   });

//   return (
//     <div>
//       <div className={styles.main}>CartScreen</div>
//       <div>{cartItemDisplay}</div>
//     </div>
//   );
// };

// export default CartScreen;




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
    getCart()
  },[])

  const cartItemDisplay = items.map((cartItem, index) => {
    return <CartItem jersey={cartItem} />;
  });

  return (
    <div>
      <div className={styles.main}>CartScreen</div>
      <div>{cartItemDisplay}</div>
    </div>
  );
};

export default CartScreen;



