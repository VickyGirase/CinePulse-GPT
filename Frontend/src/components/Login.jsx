import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [emailId, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://cinepulse-gpt.onrender.com/login", { emailId, password });
            if (response.data === "login Successfully")
            {
                console.log("User Login Successfully");
                
                navigate("/");
            }
            else {
                console.log("Authentication failed: Incorrect email or password");
            }
        } catch (error) {
            console.log("Error during authentication:", error);
        }
    };

    const handleSignup = () => {
        navigate('/signup');
      };
    

  return (
    <div className=' flex items-center justify-center h-screen md:min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600'>
    <div className='w-80 mt-[-70%] md:mt-[-1%] bg-white rounded-2xl shadow-lg p-8'>
        <h1 className='text-2xl font-semibold text-center text-gray-700 mb-6 '>Login</h1>

        <form className='space-y-4 ' onSubmit={handleSubmit}>
                  
                  <input className='w-full py-2 outline-none text-gray-700 font-medium border-gray-400 border-2 rounded-lg p-2 ' type="text" name='email' placeholder='Enter EmailId' onChange={(e) => setEmail(e.target.value)} />
                  <input className='border-gray-400 border-2 rounded-lg p-2 w-full py-2 outline-none text-gray-700 font-medium' type="text" name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

                  <button className='w-full bg-purple-600 text-white py-2 rounded-md shadow-md mt-6 hover:bg-purple-700 transition-all' type='submit'>Login</button>

                  <p>Don't Have An Account</p>
                  <button className='w-full bg-purple-600 text-white py-2 rounded-md shadow-md mt-6 hover:bg-purple-700 transition-all' onClick={handleSignup}>Signup </button>
              </form>
          </div>
    </div>
  )
}

export default Login
