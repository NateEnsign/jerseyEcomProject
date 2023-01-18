// import React from 'react'
// import styles from "./JerseyCard.module.css";
// import { Link } from 'react-router-dom'

// const JerseyCard = ({jersey}) => {
//   return (
//     <div className={styles.jerseyCard}>
//         <Link to={`/details/${jersey.id}`}>
//         <img className={styles.jerseyPhoto} src={jersey.photo} alt='' />
//         </Link>
//         <Link to={`/details/${jersey.id}`}>
//         <h3 className={styles.jerseyName}>{jersey.name}</h3>
//         <h4 className= {styles.jerseyPrice}>${jersey.price}</h4>
//         </Link>
//         <Link to={`/details/${jersey.id}`}>
//         <button className={styles.cardBtn}>Add to Cart</button>
//         </Link>
//     </div>
//   )
// }

// export default JerseyCard

import React, {useContext} from "react";
import styles from "./JerseyCard.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../store/authContext";



const JerseyCard = ({ jersey }) => {

  const authCtx = useContext(AuthContext);

  const addToCartHandler = () => {
    const body = {
      jerseyId: jersey.id,
      userId: authCtx.userId
    };
    axios
      .post(`/cartItem/${jersey.id}`, body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log("Unable to add to cart");
      });
  };

  return (
    <div className={styles.jerseyCard}>
      <Link to={`/details/${jersey.id}`}>
        <img className={styles.jerseyPhoto} src={jersey.photo} alt="" />
      </Link>
      <Link to={`/details/${jersey.id}`}>
        <h3 className={styles.jerseyName}>{jersey.name}</h3>
        <h4 className={styles.jerseyPrice}>${jersey.price}</h4>
      </Link>
      <button className={styles.cardBtn} onClick={addToCartHandler}>
        Add to Cart
      </button>
    </div>
  );
};

export default JerseyCard;
