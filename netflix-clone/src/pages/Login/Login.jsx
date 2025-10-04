import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { auth, db, login, signup, logout } from "../../firebase";

const Login = () => {
  // for authentication
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // for authentication

  //for submit authenticaon data
  const user_auth = async (event) => {
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      signup(name, email, password);
    }
  };
  //for submit authenticaon data

  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login">
      <img src={logo} className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" onClick={(event) => user_auth(event)}>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New To Nteflix ?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already Have Account ?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span> 
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
