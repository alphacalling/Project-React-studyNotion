import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { toast } from 'react-toastify';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [fromData, setFormData] = useState( {email:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler (event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");

    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
        <p className='text-richblack-5 mb-4 text-bold text-[0.875rem'>
            Email Address<sup className='text-pink-200'>*</sup>
        </p>
        
        <input type="email"
        required
        value={fromData.email}
        onChange={changeHandler}
        name='email'
        placeholder='Enter your email'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
        </label>

        <label className='w-full relative'>
        <p className='text-richblack-5 mb-4 text-bold text-[0.875rem'>
            Password<sup className='text-pink-200'>*</sup>
        </p>
        <input type={showPassword ? ("text") : ("password")}
        required
        value={fromData.password}
        onChange={changeHandler}
        name='password'
        placeholder='Enter your password' 
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />

        <span className='absolute right-3 top-[50px] cursor-pointer' onClick={ () => setShowPassword((prev) => !prev)}>
            {showPassword ?

            (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) }
        </span>

        <Link to='#'>
            <p className='text-xs mt-1 text-blue-100 ml-auto max-w-max'>
                Forgot Password
            </p>
        </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
        Sign In
        </button>
    </form>
  )
}

export default LoginForm