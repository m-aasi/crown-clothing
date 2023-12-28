import { getRedirectResult } from "firebase/auth";
import {
  userAuthWithGooglePopup,
  userAuthWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../utils/firebase.utils.js";
import { auth } from "../utils/firebase.utils.js";
import { useEffect } from "react";
import NavigationBar from "../components/navigation-bar/navigation.component.jsx";
import SignUp from "../components/sign-up/signUp.component.jsx";
import SignIn from "../components/sign-in/sigin-in.component.jsx";
import "./authentication.styles.scss";
function Authentication() {
  //Inside the SignIn component
  // useEffect(function handleGoogleRedirect() {
  //   async function handleRedirect() {
  //     const res = await getRedirectResult(auth);
  //     console.log(res);
  //     if (!res) return;
  //     const data1 = await createUserDocumentFromAuth(res.user);
  //   }
  //   handleRedirect();

  //   // const data2 = await createUserDocumentFromAuth(res.user);
  // }, []);

  // async function handleGooglePopup() {
  //   const res = await userAuthWithGooglePopup();
  //   console.log(res);
  //   if (!res) return;

  //   const data2 = await createUserDocumentFromAuth(res.user);
  // }

  return (
    <div>
      <NavigationBar />

      {/* <button onClick={handleGooglePopup}>SigIn with google popup</button> */}
      {/* <button onClick={userAuthWithGoogleRedirect}>
        SigIn with google redirect
      </button> */}
      <div className="authentication-container">
        <SignIn />

        <SignUp />
      </div>
    </div>
  );
}

export default Authentication;
