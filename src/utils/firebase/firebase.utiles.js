import { initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider

} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc9N7G1HnhQ4N9b2ofUzFISWIvgAO2qAE",
    authDomain: "shop-app-store.firebaseapp.com",
    projectId: "shop-app-store",
    storageBucket: "shop-app-store.appspot.com",
    messagingSenderId: "120529491751",
    appId: "1:120529491751:web:5aec2859326e421eee3b02"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);
 
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "selected_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);   