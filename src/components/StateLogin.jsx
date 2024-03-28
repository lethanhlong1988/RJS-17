import { useState } from "react";

import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPasword] = useState("");
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;
  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          {/* <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />

          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div> */}
          <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            value={emailValue}
            error={emailHasError && "Please enter a valid email address."}
          />
        </div>
        <div className="control no-margin">
          {/* <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
          <div className="control-error">
            {passwordIsInvalid && <p>Please enter a valid password!</p>}
          </div> */}
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange}
            value={passwordValue}
            error={passwordHasError && "Please enter a valid password!"}
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
