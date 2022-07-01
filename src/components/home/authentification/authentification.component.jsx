import SignUpForm from '../../sign up/sign-up-component/sign-up-component';
import SignInForm from '../../sign in form/sign-in-form-component/sign-in-form-component';
import './authentification.styles.scss'

const Authentification = () =>{
    
    return(

        <div className='authentification-container'>
            <SignInForm />
            <SignUpForm />
        </div>

         );
}

export  default Authentification;