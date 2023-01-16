import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";



const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <h2>Jersey Town</h2>
        <ul>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/auth">
            <button>Login/Register</button>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default Header;
