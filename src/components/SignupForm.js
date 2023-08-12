import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from "react-hot-toast";


const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName:"", 
    lastName:"", 
    email:"", 
    password:"", 
    confirmPassword:""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  function changeHandler(event){
    setFormData( (prevData) => (
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ))
}

  function submitHandler(event){
    event.preventDefault();
    if (formData.password !== formData.confirmPassword){
      toast.error("Password Do not match");
      return;
    }
      setIsLoggedIn(true);
      toast.success("Account Created");
      const accountData ={
        ...formData
      };

      const finalData = {
        ...accountData,accountType
      }
      console.log("printing account data");
      console.log(finalData);
      navigate('/dashboard');
  }

  return (
    <div>
      {/* student-Instructor tab */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-3 rounded-full max-w-max'>
      <button className={`${accountType === "student" ? 
      "bg-richblack-900 text-richblack-5 px-3 rounded-md" : 
      "bg-transparent text-richblack-200} py-2 px-5 rounded-full transition-all duration-200"} `}
      onClick={() => setAccountType("student")}>
          Student
        </button>

        <button className={`${accountType === "instructor" ? 
        "bg-richblack-900 text-richblack-5 px-3 rounded-md" : 
        "bg-transparent text-richblack-200} py-2 px-5 rounded-full transition-all duration-200"} `}
         onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>

      {/* first name and last name */}
        <div className='flex gap-x-4 mt-[10px]'>
          <label className='w-full'>
            <p
            className='text-richblack-5 mb-1 text-bold text-[0.875rem] leading-[1.375rem]'>
            First Name<sup className='text-pink-200'>*</sup></p>

            <input 
            type="text"
            required
            name='firstName'
            onChange={changeHandler}
            placeholder='Enter your first Name'
            value={formData.firstName} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>

          <label className='w-full'>
            <p className='text-richblack-5 mb-1 text-bold text-[0.875rem] leading-[1.375rem]'
            >Last Name <sup className='text-pink-200'>*</sup></p>

            <input 
            type="text"
            required
            name='lastName'
            onChange={changeHandler}
            placeholder='Enter your Last Name'
            value={formData.lastName}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
          </label>
        </div>

      {/* email address */}
      <div className='mt-[20px]'>
      <label className='w-full mt-[10px]'>
            <p className='text-richblack-5 text-[0.875rem] mb-1 text-bold leading-[1.375rem]'
            >Email Address<sup className='text-pink-200'>*</sup></p>

            <input type="email"
            required
            name='email'
            onChange={changeHandler}
            placeholder='Enter your Email Address'
            value={formData.email} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
      </div>

          {/* createPassword and confirm Password */}
          <div className='flex w-full gap-x-4 mt-[20px]'>

            <label className='relative w-full'>
            <p className='text-richblack-5 text-[0.875rem] mb-1 text-bold leading-[1.375rem]'
            >Create Password <sup className='text-pink-200'>*</sup></p>
            
            <input type={showPassword ? ("text"):("password")}
            required
            name='password'
            onChange={changeHandler}
            placeholder='Enter your password'
            value={formData.password} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

                <span className='absolute right-3 top-[38px] cursor-pointer'
                 onClick={ () => setShowPassword((prev) => !prev)}>
                {showPassword ? 
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) :
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) }

                </span>
          </label>

          <label className='relative w-full'>
            <p className='text-richblack-5 text-[0.875rem] mb-1 text-bold leading-[1.375rem]'
            >Confirm Password <sup className='text-pink-200'>*</sup></p>
            <input 
            required
            type={showConfirmPassword ? ("text"):("password")}
            name='confirmPassword'
            onChange={changeHandler}
            placeholder='confirm password'
            value={formData.confirmPassword} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
                <span className='absolute right-3 top-[38px] cursor-pointer'
                onClick={ () => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? 
                  (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) :
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) }
                </span>
          </label>
          </div>
          
          <button
          className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'
          >Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm