import firebase from "firebase";
var firebaseConfig = {
  //your firebase config info
  apiKey: "AIzaSyD3mqfxmAvbVMsVUI-s6WWM6PzGn-jpXxs",
  authDomain: "instaclone-50470.web.app",
  databaseURL: "https://instaclone-50470.firebaseio.com",
  projectId: "instaclone-50470",
  // storageBucket: "myapp-project-123.appspot.com",
  messagingSenderId: "587971859878"
  //  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  // measurementId: "G-8GSGZQ44ST"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
