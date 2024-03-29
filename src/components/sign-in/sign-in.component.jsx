import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";

import {ButtonsBarContainer, SignInContainer, SignInTitle} from './sign-in.styles';

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const dispatch = useDispatch();

    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        dispatch(emailSignInStart(email, password));
    };

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({...userCredentials, [name]: value});
    };


    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type='button' onClick={() => {dispatch(googleSignInStart())}} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
}

export default SignIn;