import React, { useState } from 'react'
import "./ScrollBlock.css";
import SignInText from "./SignInText"
import SignUpText from "./SignUpText"
const ScrollBlock = ({isActive, setIsActive, setNotFirstClick}) => {
    const clickSignIn = () =>{
        setIsActive(false);
        setNotFirstClick(true);
    }
    const clickSignUp = () =>{
        setIsActive(true);
        setNotFirstClick(true);

    }
  return (
    <div className={`toggle_block ${isActive?'toggle_block_active':''}`}>
        <SignInText isActive = {isActive} clickSignIn = {clickSignIn}></SignInText>
        <SignUpText isActive = {isActive} clickSignUp = {clickSignUp}></SignUpText>
    </div>
  )
}

export default ScrollBlock