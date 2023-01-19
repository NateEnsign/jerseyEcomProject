import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DetailsScreen.module.css";
import AuthContext from "../store/authContext";
import {Link} from 'react-router-dom'
import Swal from "sweetalert2";

const DetailsScreen = () => {
  const [jersey, setJersey] = useState({});
  const { id } = useParams();
  const Swal = require('sweetalert2')
  const authCtx = useContext(AuthContext);

  const addToCartHandler = () => {
    Swal.fire('Item added to cart!')
    const body = {
      jerseyId: jersey.id,
      userId: authCtx.userId
    };
    axios
      .post(`/cartItem/${id}`, body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        console.log("Unable to add to cart");
      });
  };

  const getData = () => {
    axios
      .get(`/api/jersey/${id}`)
      .then((res) => {
        console.log(res.data);
        setJersey(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  },);

  return (
    <div className={styles.detailsModule}>
      <img src={jersey.photo} className={styles.detailsImage} />
      <div className={styles.detailsOverview}>
        <div className={styles.detailsDetails}>
          <h4 className={styles.detailsName}>{jersey.name}</h4>
          <h4 className={styles.detailsPrice}>{jersey.price}</h4>
          <p className={styles.detailsDescription}>{jersey.description}</p>
        </div>
      </div>
      <button onClick={addToCartHandler}>Add to Cart</button>
      <Link to='/'>
      <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default DetailsScreen;
