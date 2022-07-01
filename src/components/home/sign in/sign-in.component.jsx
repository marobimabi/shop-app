import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../../utils/firebase/firebase.utiles'
import SignUpForm from '../../sign up/sign-up-component/sign-up-component';

const SignIn = () =>{
    const LogGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef= await createUserDocumentFromAuth(user);

    }
    return(

        <div>
        <div>Sign in page</div>
        <button onClick={LogGoogleUser}>SIGN With GOOGLES</button>
        <SignUpForm />

        </div>

         );
}

export  default SignIn;