import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPasword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "Long",
    password: "123456",
  });
  function handleOnchange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }
  console.log(enteredValues);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted!");
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(event) => handleOnchange("email", event.target.value)}
            value={enteredValues.email}
          />
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(event) => handleOnchange("password", event.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
