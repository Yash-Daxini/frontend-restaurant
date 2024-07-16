import React from "react";
import SuccessImage from "../../assets/Images/login-success-img.png";
import styles from "./style.module.css";
import FormButton from "../FormButton";

const LoginSuccess = () => {
  return (
    <div>
      <div className={`${styles.imgDiv}`}>
        <img
          className={`${styles.img}`}
          src={SuccessImage}
          alt="Can't load image"
        />
        <div className={`${styles.successMessageDiv}`}>
          <span className={`${styles.successMessage}`}>Login Successful</span>
          <FormButton buttonValue={"Go to Tracking Screen"} />
          <span className={`${styles.logoutLink}`}>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccess;
