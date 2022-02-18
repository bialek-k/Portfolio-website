import styles from "./ErrorTextMessage.module.scss";

const ErrorTextMessage = ({ message }) => {
  return (
    <p className={styles.errorMsg} style={{ fontSize: "14px" }}>
      {message}
    </p>
  );
};

export default ErrorTextMessage;
