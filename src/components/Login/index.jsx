import styles from "./style.module.css";
import { useState } from "react";
import googleLogo from "../../assets/Images/GoogleLogo.jpg";

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
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            className="form-control"
            id="exampleInputPassword1"
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
        </div>
        <button type="submit" className={`btn btn-primary ${styles.signInBtn}`}>
          Sign In
        </button>
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
        <span className={`${styles.registerLink}`}>Register</span>
      </div>
    </div>
  );
};

export default Login;
