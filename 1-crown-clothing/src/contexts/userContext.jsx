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

const initialState = {
  currentUser: null,
  setCurrentUser: () => null,
};

function reducer(state, action) {
  switch (action.type) {
    case "user/setCurrentUser":
      return { ...state, currentUser: action.payLoad };

    default:
      throw new Error("Action doesnot match ");
  }
}

const UserContext = createContext(null);
function UserProvider({ children }) {
  // const [currentUser, setCurrentUser] = useState(initialState);
  const [{ currentUser }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch({ type: "user/setCurrentUser", payLoad: user });
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        // setCurrentUser,
        dispatch,
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
