import React from 'react'
import "./SignIn.css";
import MyInput from '../../../UI/MyInput/MyInput';
import MyButton from '../../../UI/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';
const SignIn = ({isActive}) => {
  const router = useNavigate();
  return (
    <div className={`block sign_in ${isActive?"sign_in_active":""}`}>
        <div className='title'>Sign In</div>
            <div className='message'>Write your username and password</div>
            <MyInput placeHolder = "username"></MyInput>
            <MyInput placeHolder = "password" type = "password"></MyInput>
            <div className='buttons'>
              <a className='forgot_btn' onClick={() => router("/forgotpassword")}>Forgot your password?</a>
              <MyButton>Sign in</MyButton>
            </div>
    </div>
  )
}

export default SignIn