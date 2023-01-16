import React, { useState, useEffect } from "react";
import axios from "axios";
import JerseyCard from "../components/JerseyCard";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  const [jerseys, setJerseys] = useState([]);

  const getData = () => {
    axios
      .get("api/allJerseys")
      .then((res) => {
        console.log(res.data);
        setJerseys(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const jerseyDisplay = jerseys.map((jersey, index) => {
    return <JerseyCard jersey={jersey} />;
  });

  return (
    <div className={styles.mainPage}>
     <div className={styles.banner} style={{
        width: '100vw',
        height: '35vw',
        background: `linear-gradient(
          190deg,
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)),          
          url("https://wallpaperaccess.com/full/6578522.jpg") no-repeat top/cover`,
        // backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 className={styles.bannerText}>Buy your favorite players game worn jersey today!!</h2>
      </div>

      <div className={styles.jerseyContainer}>{jerseyDisplay}
      </div>
    </div>
  );
};

export default HomeScreen;
