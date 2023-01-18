import React, { useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { GrCart } from "react-icons/gr";
import AuthContext from "../store/authContext";

const Header = () => {
  const authCtx = useContext(AuthContext)

  return (
    <div>
      <header className={styles.header}>
        
          <h2 className={styles.logo}>Jersey Town</h2>
          <ul>
            <h4>Welcome!</h4>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/auth">
              <button>Login/Register</button>
            </Link>
            <Link to="/cart">
              <GrCart />
            </Link>
          </ul>
      </header>
    </div>
  );
};

export default Header;
