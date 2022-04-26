import { useState } from "react";

const contact2 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
    };

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          onChange={(e) => firstNameHandler(e)}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          onChange={(e) => lastNameHandler(e)}
        />
      </label>
      <button>WYŚLIJ</button>
    </form>
  );
};

export default contact2;
