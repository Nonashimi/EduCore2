import React from 'react'

const SignUpText = ({isActive, clickSignUp}) => {
  return (
    <div className={`toggle ${isActive?'toggle_active':''}`}>
            <div className={`toggle_panel toggle_right ${isActive?'toggle_right_active':''}`}>
                <div className="start_message">
                    <div className="start_title">
                        Hello, Friend!
                    </div>
                    <div className="start_text">
                        Register with your personal details to use all of the features                    
                    </div>
                    <button className='sign_button' onClick={() => clickSignUp()}>Sign Up</button>
                </div>
            </div>
        </div>
  )
}

export default SignUpText