import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  createUserDocumentFromAuth,
  getCurrentUser,
  onAuthStateChangedListner,
} from "./utils/firebase.utils.js";
import { checkUserSession, setCurrentUser } from "./features/user/userSlice.js";
import Directory from "./components/directory/directory.component.jsx";
import Shop from "./pages/shopPage.jsx";
import CheckOut from "./pages/checkoutPage.jsx";
import Contact from "./pages/ContactPage.jsx";
import Authentication from "./pages/AuthenticationPage.jsx";
const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

function App() {
  const isCheckOut = useSelector((state) => state.cart.isCheckOut);

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(checkUserSession());
    // getCurrentUser().then((user) => console.log(user));
    // const unsubscribe = onAuthStateChangedListner((user) => {
    //   if (user) {
    //     createUserDocumentFromAuth(user);
    //   }

    //   dispatch(setCurrentUser(user));
    // });

    // return unsubscribe;
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Directory categories={categories} />} />
          <Route path="shop/*" element={<Shop />} />

          <Route path="checkout" element={<CheckOut />} />
          <Route path="contact" element={<Contact />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
