import React from 'react'

const SignInText = ({isActive, clickSignIn}) => {
  return (
        <div className={`toggle_panel toggle_left ${isActive?'toggle_left_active':''}`}>
                <div className="start_message">
                    <div className="start_title">
                        Welcome Back!
                    </div>
                    <div className="start_text">
                        Enter your personal details to use all of the features
                    </div>
                    <button className='sign_button' onClick={() => clickSignIn()}>Sign In</button>
                </div>
        </div>
  )
}

export default SignInText