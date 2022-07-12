import { initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    
    

} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
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
  export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = collection (db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef,object.title.toLowerCase());
      batch.set(docRef, object);
      
    });
    await batch.commit();
    console.log('DONE');
  }

  export const getCategoryAndDocument = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) =>{
      const {title,items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})

    return categoryMap; 
  }


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

    return await createUserWithEmailAndPassword(auth, email, password);

  }  

  export const signInAuthUserwithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);

  }  
  export const signOutUser = async() => await signOut(auth);

  export const onAuthStateChangeListner = (callback) => onAuthStateChanged(auth, callback);
  
  