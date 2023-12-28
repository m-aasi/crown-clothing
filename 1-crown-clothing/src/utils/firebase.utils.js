import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtaq5TQiBPWII3aS0RFXn4RAdvEuiiJEc",
  authDomain: "crwn-clothing-db-961c6.firebaseapp.com",
  projectId: "crwn-clothing-db-961c6",
  storageBucket: "crwn-clothing-db-961c6.appspot.com",
  messagingSenderId: "490847002842",
  appId: "1:490847002842:web:b8c34eb08c7ad0e2b745e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  select: "select_account",
});

export const auth = getAuth();

export async function userAuthWithGooglePopup() {
  return await signInWithPopup(auth, googleProvider);
}

export async function userAuthWithGoogleRedirect() {
  await signInWithRedirect(auth, googleProvider);
}

const db = getFirestore();

export async function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  const collectionRef = collection(db, collectionKey);
  // console.log(collectionRef);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title);
    // console.log(docRef);
    batch.set(docRef, object);
  });
  await batch.commit();
}
export async function getCategoriesAndDocuments() {
  const collectionRef = collection(db, "categories");
  // console.log(collectionRef);

  const q = query(collectionRef);
  // console.log(q);
  const querySnapShot = await getDocs(q);

  const categoryMap = querySnapShot.docs.reduce(function (acc, docSnapShot) {
    const { title, items } = docSnapShot.data();
    // console.log(items);
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}

export async function createUserDocumentFromAuth(user, additionalInfo) {
  if (!user) return;
  const userDocRef = doc(db, "user", user.uid);
  // console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("There was an error in creating user", error.message);
    }
    return userDocRef;
  }
}

export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signOutUser() {
  // if (!email || !password) return;
  return await signOut(auth);
}

export function onAuthStateChangedListner(callback) {
  onAuthStateChanged(auth, callback);
}

export async function storeProductInDb() {
  const userDocRef = doc(db, "product", id);
  console.log(userDocRef);
}
