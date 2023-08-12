import React from 'react'
import signupImg from  '../assets/signup.png'
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
        <Template
        title="Join the millions learning to code with StudyNotion for free."
        desc1="Build skill for Today, Tomorrow and Beyond."
        desc2="Educatin to future, proof your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
    />
    </div>
  )
}

export default Signup