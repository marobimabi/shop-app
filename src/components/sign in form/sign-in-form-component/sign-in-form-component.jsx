import { async } from "@firebase/util";
import { useState } from "react";
import {signInWithGooglePopup, createUserDocumentFromAuth,signInAuthUserwithEmailAndPassword } from '../../../utils/firebase/firebase.utiles'
import FormInput from "../../form input/form input componenet/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../../button component/button.component";

const DefaultSignField ={
    email:'',
    password:'',
}

const SignInForm = () =>{
    const [formFields, setformField] = useState(DefaultSignField);
    const {email,password} = formFields;
    console.log(formFields);

    const resetFormFields = () =>{
        setformField(DefaultSignField);
    };

    const SignInwithGoogle = async () =>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);

    };
    
    const handlesubmit = async (event) =>{
        event.preventDefault();
        
        try {
            const response = await signInAuthUserwithEmailAndPassword(email, password);
            console.log(response);
           resetFormFields();
        } catch (error) {

            switch(error.code){
                case 'auth/wrong-password': alert('incorrect password'); break;
                case 'auth/user-not-found' : alert('no user associate with this email'); break;
                default : console.log('error');
            }
                 
        }

    }
    const handlechange = (event) =>{
        const {name, value} = event.target;
        setformField({...formFields, [name]: value})
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handlesubmit}>

                <FormInput label="Email " required
                type='email' name='email' value={email} onChange={handlechange}  
                />

                <FormInput label="Password" required
                type='text' name='password' value={password} onChange={handlechange} 
                />

                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={SignInwithGoogle}>SIGN With GOOGLE</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;