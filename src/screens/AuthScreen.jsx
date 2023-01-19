import React, { useState, useContext } from "react";
import axios from "axios";
import styles from "./AuthScreen.module.css";

import AuthContext from "../store/authContext";

const AuthScreen = () => {
  const [register, setRegister] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState("none");

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisplay("none");

    const body = {
      firstName,
      lastName,
      email,
      password,
    };

    axios
      .post(!register ? "/register" : "/login", body)
      .then((res) => {
        console.log("AFTER AUTH", res.data);
        authCtx.login(res.data.token, res.data.exp, res.data.userId);
      })
      .catch((err) => {
        setMessage(err.response.data);
        setDisplay("block");
        setPassword("");
        setEmail("");
      });
  };

  return (
    <div className={styles.page}>
      <div className={styles.base} style={{
        width: '100vw',
        height: '47vw',
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
        <div className={styles.authHeader}>
          {!register ? <h2>Register</h2> : <h2>Login</h2>}
        </div>
        <form className={styles.auth} onSubmit={submitHandler}>
          {!register && (
            <input
              className={styles.input}
              type="text"
              placeholder="first name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          )}
          {!register && (
            <input
              className={styles.input}
              type="text"
              placeholder="last name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          )}
          <input
            className={styles.input}
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className={styles.authBtn}>
            {!register ? "Register" : "Login"}
          </button>
          <p style={{ display: display }} className={styles.msg}>
            {message}
          </p>
        </form>
        <button className={styles.swtichBtn} onClick={() => setRegister(!register)}>
          Need to {register ? "Register" : "Login"}?
        </button>
      </div>
    </div>
  );
};

export default AuthScreen;
