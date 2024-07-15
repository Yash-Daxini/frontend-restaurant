import { useState } from "react";
import styles from "./style.module.css";
import googleLogo from "../../assets/Images/GoogleLogo.jpg";
import FormInput from "../FormInput";
import FormBtn from "../FormButton";
import { Link } from "react-router-dom";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={`${styles.signupDiv}`}>
      <span className={`${styles.title}`}>Create your new account</span>
      <span className={`${styles.description}`}>
        Create an account to start looking for the food you like
      </span>
      <form>
        <FormInput labelValue={"Email Address"} inputType={"email"} />
        <FormInput labelValue={"User Name"} inputType={"text"} />

        <FormInput
          labelValue={"Password"}
          inputType={passwordVisible ? "text" : "password"}
        />

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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkbox"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree with <span className={styles.highlightText}>Terms of Service</span> and{" "}
            <span className={styles.highlightText}>Privacy Policy</span>
          </label>
        </div>
        <FormBtn buttonValue={"Log in"} />
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
        <span>Have an account?</span>
        <Link to="/login" className={`${styles.registerLink}`}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
