import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebaseApp.auth().sighInWithPopup(provider);
  }
}

export default AuthService;