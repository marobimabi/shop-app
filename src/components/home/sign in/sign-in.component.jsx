import {signInWithGooglePopup} from '../../../utils/firebase/firebase.utiles'


const SignIn = () =>{
    const LogGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        console.log(response);

    }
    return(

        <div>Sign in page</div>,
        <button onClick={LogGoogleUser}>SIGN With GOOGLE</button>

         );
}

export  default SignIn;