import { useState } from "react";

export default function Signup() {
  console.log("Signup");
  const [passwordsAreNotEaual, setPasswordsAreNotEqual] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;

    if (data.password !== data["confirm-password"]) {
      setPasswordsAreNotEqual(true);
      return;
    } else {
      setPasswordsAreNotEqual(false);
    }

    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little information to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            minLength={6}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
          <div className="control-error">
            {passwordsAreNotEaual && <p>Passwords must match</p>}
          </div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>
        <div className="control">
          <label htmlFor="first-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select name="role" id="role">
          <option value="studen">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>
        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>
        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">
          Reset
        </button>
        <button className="button" type="submit">
          Sign up
        </button>
      </p>
    </form>
  );
}
