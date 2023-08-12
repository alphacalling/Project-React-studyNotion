import React from 'react';
import loginImg from '../assets/login.png';
import Template from '../components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skill for Today, Tomorrow and Beyond."
        desc2="Educatin to future, proof your career."
        formtype="login"
        image={loginImg}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login