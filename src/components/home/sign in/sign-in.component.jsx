import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../../utils/firebase/firebase.utiles'


const SignIn = () =>{
    const LogGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user);

    }
    return(

        <div>
        <div>Sign in page</div>
        <button onClick={LogGoogleUser}>SIGN With GOOGLES</button>

        </div>

         );
}

export  default SignIn;