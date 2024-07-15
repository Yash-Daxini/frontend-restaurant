import styles from './style.module.css';

const FormButton = ({buttonValue}) => {
  return (
    <button type="submit" className={`${styles.formBtn}`}>
      {buttonValue}
    </button>
  );
};

export default FormButton;
