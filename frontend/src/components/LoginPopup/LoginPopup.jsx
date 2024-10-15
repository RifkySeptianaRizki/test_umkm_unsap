import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowlogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input type="text" placeholder="Your name" required />}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currState === "Sign Up" ? "Tambahkan akun" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Dengan melanjutkan, saya setuju dengan syarat dan ketentuan penggunaan serta kebijakan privasi.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Tambahkan akun baru? <span onClick={() => setCurrState("Sign Up")}>Klik disini</span>
          </p>
        ) : (
          <p>
            Sudah memiliki akun? <span onClick={() => setCurrState("Login")}>Login disini</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
