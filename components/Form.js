import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Link from "next/link";

import styles from "./Form.module.scss";

import Button from "./Button";
import ErrorTextMessage from "./ErrorTextMessage";

const Form = ({ setSubmitted }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSubmitted(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.userInfo}>
        <div className={styles.halfWidth}>
          <input
            {...register("name", {
              required: "Imie jest wymagane",
            })}
            placeholder="Imię i nazwisko"
            className={errors.name && styles.errorStyle}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <ErrorTextMessage message={message} />}
          />
        </div>
        <div className={styles.halfWidth}>
          <input
            {...register("email", {
              required: "Email jest wymagany",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "email musi zawierać @",
              },
            })}
            placeholder="email"
            className={errors.email && styles.errorStyle}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <ErrorTextMessage message={message} />}
          />
        </div>
      </div>

      <div className={styles.message}>
        <textarea
          {...register("message", {
            required: "Napisz kilka zdań",
            minLength: { value: 10, message: "conajmniej dwa :)" },
          })}
          placeholder="message"
          className={errors.message && styles.errorStyle}
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => <ErrorTextMessage message={message} />}
        />
      </div>
      <div className={styles.action}>
        <Link href="mailto:krzysztof.bialek1@gmail.com">
          <p>krzysztof.bialek1@gmail.com</p>
        </Link>
        <Button sec name="Wyślij" type="submit" sm />
      </div>
    </form>
  );
};

export default Form;
