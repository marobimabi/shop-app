import { initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword

} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

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
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);   

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async(userAuth, additionalInformation={}) =>{
    const userDocRef =doc(db,'users', userAuth.uid);
 
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const { displayName, email} =userAuth;
      const creatAt = new Date();
      try {
        await setDoc(userDocRef, {displayName,email, creatAt, ...additionalInformation});
        
      } catch (error) {
        console.log('there creating the user', error.message);
      }
    }
    return userDocRef;


  }

  export const createAuthUserwithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;

    return await createAuthUserwithEmailAndPassword(auth, email, password);

  }  
