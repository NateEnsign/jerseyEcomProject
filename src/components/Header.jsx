import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { GrCart } from "react-icons/gr";
import AuthContext from "../store/authContext";

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.logo}>Jersey Town</h2>
        <div className={styles.links}>
          <Link to="/" className={styles.option}>
            Home
          </Link>

          {!authCtx.token && (
            
              <Link to="/auth" className={styles.option}>login</Link>
            
          )}
          {authCtx.token && (
           
              <Link to="/" className={styles.option} onClick={authCtx.logout}>
                Logout
              </Link>
            
          )}
          {authCtx.token && (
          <Link to="/cart" className={styles.cartSymbol}><GrCart /></Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
