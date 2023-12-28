import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
} from "../utils/firebase.utils";

const UserContext = createContext(null);
const initialState = {
  currentUser: null,
  setCurrentUser: () => null,
};

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(initialState);

  useEffect(function () {
    const unsubscribe = onAuthStateChangedListner((user) => {
      // console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);

  return context;
}

export { UserProvider, useUserContext };
