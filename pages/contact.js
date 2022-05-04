import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "../styles/contact.module.scss";
import heroPhoto from "../public/images/hero_photo.jpeg";
import Form from "../components/Form";
import Button from "../components/Button";

const contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.description}>
            <div className={styles.photo}>
              <Image alt="" src={heroPhoto} className={styles.photoItem} />
            </div>
          </div>
          <h1 className={styles.titleHeader}>Bądźmy w kontakcie!</h1>
        </div>
        <div className={styles.formContent}>
          <div className={styles.form}>
            {!submitted ? (
              <Form setSubmitted={setSubmitted} />
            ) : (
              <div className={styles.subMessage}>
                <h1>Dzięki za wiadomść!</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
