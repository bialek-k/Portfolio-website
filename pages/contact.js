import { useState } from "react";
import Link from "next/link";
import classes from "../styles/contact.module.scss";
import Button from "../components/Button";

const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (name.trim() == "") {
      return;
    }

    console.log("name:", name, "email:", email, "message:", message);
    console.log(name, email, message);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.photo}>
        <div className={classes.photoItem} />
      </div>
      <div className={classes.title}>
        <h1>Bądźmy w kontakcie!</h1>
        <svg
          width="234"
          height="97"
          viewBox="0 0 234 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M202.047 10.7006C186.848 5.3668 168.465 4.44116 156.166 5.26108C154.789 5.35292 153.597 4.31057 153.506 2.93291C153.414 1.55526 154.456 0.363998 155.834 0.272154C168.535 -0.574594 187.652 0.349765 203.703 5.98266C219.735 11.6089 233.5 22.2888 233.5 41.2666C233.5 46.1078 231.131 50.3252 227.304 53.9197C223.503 57.4896 218.118 60.5955 211.641 63.3282C198.675 68.7987 180.709 73.0274 160.473 76.2814C120.803 82.6601 71.7967 85.3844 33.0148 86.085L33.0618 93.6885C33.0748 95.7908 30.9773 97.2541 29.0087 96.5161L2.39552 86.5391C-0.188361 85.5704 -0.204168 81.9212 2.37123 80.9302L28.8598 70.7373C30.8176 69.984 32.9242 71.421 32.9372 73.5186L32.9839 81.0848C71.6502 80.3844 120.362 77.6668 159.679 71.3448C179.793 68.1106 197.289 63.9569 209.697 58.7215C215.908 56.1013 220.688 53.2735 223.881 50.2751C227.047 47.3015 228.5 44.3161 228.5 41.2666C228.5 25.4444 217.265 16.041 202.047 10.7006Z"
            fill="#474747"
          />
        </svg>

        <Link href="mailto:krzysztof.bialek1@gmail.com">
          <p>krzysztof.bialek1@gmail.com</p>
        </Link>
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.userInfo}>
          <input
            type="text"
            placeholder="imie i nazwisko"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.message}>
          <input
            type="text"
            placeholder="Twoja wiadomość"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className={classes.action}>
          <Button sec name="Wyślij" type="submit" sm />
        </div>
      </form>
    </div>
  );
};

export default contact;
