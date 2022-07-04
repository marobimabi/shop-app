import { async } from "@firebase/util";
import { useState } from "react";
import {createAuthUserwithEmailAndPassword, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utiles'
import FormInput from "../../form input/form input componenet/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../../button component/button.component";

const DefaultSignField ={
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () =>{
    const [formFields, setformField] = useState(DefaultSignField);
    const {displayName,email,password,confirmPassword} = formFields;
    

    const resetFormFields = () =>{
        setformField(DefaultSignField);
    }
    const handlesubmit = async (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){ alert("Password and confirmation does not mutch"); return;}
        
        try {
           const {user} = await createAuthUserwithEmailAndPassword(email, password);

           await createUserDocumentFromAuth(user, {displayName});
           resetFormFields();
        } catch (error) {

            if(error.code === 'auth/email.already-in-use'){
                alert('Email already in use')
            }
            else{console.log('user creation encountered an error', error);}
                 
        }

    }
    const handlechange = (event) =>{
        const {name, value} = event.target;
        setformField({...formFields, [name]: value})
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handlesubmit}>
               <FormInput label="Display Name"
                type='text' name='displayName' value={displayName} onChange={handlechange} required
                />

                <FormInput label="Email "
                type='email' name='email' value={email} onChange={handlechange} required
                />

                <FormInput label="Password"
                type='text' name='password' value={password} onChange={handlechange} required
                />

                <FormInput label="Confirm Password"
                type='text' name='confirmPassword' value={confirmPassword} onChange={handlechange} required
                
                />
                <Button buttonType='google'>Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;