import styles from "./style.module.css";
import { useState } from "react";
import googleLogo from "../../assets/Images/GoogleLogo.jpg";
import FormInput from "../FormInput" ; 
import FormBtn from "../FormButton" ;
import { Link } from "react-router-dom";  

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={`${styles.loginDiv}`}>
      <span className={`${styles.title}`}>Login to your account.</span>
      <span className={`${styles.description}`}>
        Please sign in to your account
      </span>
      <form>
        <FormInput labelValue={"Email Address"} inputType={"email"} />
        <FormInput labelValue={"Password"} inputType={passwordVisible ? "text" : "password"} />

        <button
          className={`${styles.passwordVisibilityBtn}`}
          onClick={(event) => togglePasswordVisibility(event)}
        >
          {!passwordVisible ? (
            <ion-icon name="eye-off-outline"></ion-icon>
          ) : (
            <ion-icon name="eye-outline"></ion-icon>
          )}
        </button>
        <FormBtn buttonValue={"Log in"}  />
      </form>
      <div className={`${styles.signInOptionDiv}`}>
        <span className={`${styles.horizontalLine}`} />
        <span>Or sign in with</span>
        <span className={`${styles.horizontalLine}`} />
      </div>
      <div className={`${styles.googleSignInOption}`}>
        <img src={googleLogo} alt="Google" />
      </div>
      <div className={`${styles.registerDiv}`}>
        <span>Don't have an account?</span>
        <Link to="/signup" className={`${styles.registerLink}`}>Register</Link>
      </div>
    </div>
  );
};

export default Login;
