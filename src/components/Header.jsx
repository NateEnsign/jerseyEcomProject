import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Jersey Town</h1>
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
