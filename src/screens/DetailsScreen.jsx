import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DetailsScreen.module.css";

const DetailsScreen = () => {
  const [jersey, setJersey] = useState({});
  const { id } = useParams();

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
  }, []);

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
    </div>
  );
};

export default DetailsScreen;
