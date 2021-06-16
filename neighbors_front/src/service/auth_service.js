import firebase from "firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    return firebase.auth().sighInWithPopup(authProvider); 
  }
}

export default AuthService;