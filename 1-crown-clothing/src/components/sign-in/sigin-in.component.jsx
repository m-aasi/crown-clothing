import React from "react";
import { useState } from "react";
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  userAuthWithGooglePopup,
} from "../../utils/firebase.utils";
import { useUserContext } from "../../contexts/userContext";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { BTN_TYPE_CLASSES } from "../button/button.component";
import "./sigin-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignIn() {
  const { currentUser, dispatch } = useUserContext();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  console.log(currentUser);
  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await signInUserWithEmailAndPassword(email, password);
      console.log(res);
      if (!res) return;
      // const data = await createUserDocumentFromAuth(res.user, { displayName });
      // setCurrentUser(res.user);
      dispatch({ type: "user/setCurrentUser", payLoad: res.user });

      resetFormFields();
    } catch (error) {
      console.error(error.message);
    }
  }

  function handleGooglePopup() {
    console.log("run");
    async function googlePopUp() {
      try {
        const res = await userAuthWithGooglePopup();
        console.log(res);
        if (!res) return;

        // const data = await createUserDocumentFromAuth(res.user);
        const { user } = await createUserDocumentFromAuth(res);

        // setCurrentUser(user);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("Invalid email, User don't exist");

            break;
          case "auth/wrong-password":
            alert("incorrect password ");
            break;
          default:
            throw new Error("error");
        }
      }
    }
    googlePopUp();
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span>Sign In with Email and Passowrd</span>

      <form action="" onSubmit={handleSubmit}>
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

        {/* <button type="submit">Sign Up</button> */}
        <div className="buttons-container">
          {/* <Button onSubmitHandler={{ type: "submit" }}>Sign In</Button>
           */}
          <Button buttonType={BTN_TYPE_CLASSES.base}>Sign In</Button>

          <Button
            buttonType={BTN_TYPE_CLASSES.google}
            onClick={handleGooglePopup}
          >
            Google Sigin In
          </Button>
        </div>
      </form>
    </div>
  );
}
