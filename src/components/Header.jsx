import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div>src={logo}</div>
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
