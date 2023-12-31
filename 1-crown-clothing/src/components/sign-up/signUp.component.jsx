import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import Button from "../button/button.component";
// import { useUserContext } from "../../contexts/userContext";
import { signUpStart } from "../../features/user/userSlice";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // const { setCurrentUser } = useUserContext();

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Your password does not match ");
      return;
    }

    dispatch(signUpStart(email, password, displayName));
    // const res = await createAuthUserWithEmailAndPassword(email, password);
    // console.log(res);
    // if (!res) return;
    // const data = await createUserDocumentFromAuth(res.user, { displayName });
    // console.log(data);
    // // setCurrentUser(res.user);

    resetFormFields();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className="sign-up-container">
      <h2>Sign up with Email and Passowrd</h2>
      <span> Don't have an account ?</span>

      <form action="" onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Display Name</label> */}
        {/* <input

          type="text"
          required
          onChange={(e) => handleChange(e)}
          name="displayName"
          className="form-input"
          value={displayName}
        /> */}
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",

            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",

            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",

            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",

            value: confirmPassword,
          }}
        />

        {/* <button type="submit">Sign Up</button> */}
        <Button onSubmitHandler={{ type: "submit" }}>Sign Up</Button>
      </form>
    </div>
  );
}
