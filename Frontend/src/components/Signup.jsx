import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Signup = () => {

    const [firstName, setName] = useState("")
    const [emailId, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    

    async function handleSubmit(e){
        e.preventDefault();

        try{

            await axios.post("https://cinepulse-gpt.onrender.com/signup",{
                firstName,emailId,password
            })
            .then(result => {
                console.log(result)
                if(result.data ){
                    navigate("/login")
                }
           
            })
            .catch(err => console.log(err))
        }

        
        catch(e){
            console.log(e);

        }

    }

    const handleSignup = () => {
        navigate('/login');
      };

    
  return (
    <div className=' flex items-center justify-center h-screen md:min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600'>
    <div className='w-80 mt-[-70%] md:mt-[-1%] bg-white rounded-2xl shadow-lg p-8'>
        <h1 className='text-2xl font-semibold text-center text-gray-700 mb-6 '>Signup</h1>
              <form className='space-y-4 ' onSubmit={handleSubmit}>
                  
                  <input className='border-gray-400 border-2 rounded-lg p-2 w-full py-2 outline-none text-gray-700 font-medium ' type="text" name='Name' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                  <input className='border-gray-400 border-2 rounded-lg p-2 w-full py-2 outline-none text-gray-700 font-medium ' type="text" name='email' placeholder='Enter EmailId' onChange={(e) => setEmail(e.target.value)} />
                  <input className='border-gray-400 border-2 rounded-lg p-2 w-full py-2 outline-none text-gray-700 font-medium ' type="password" name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

                  <button className='w-full bg-purple-600 text-white py-2 rounded-md shadow-md mt-6 hover:bg-purple-700 transition-all' type='submit'>  
                      SignUp  
                  </button>

                  <p>Already Have Account</p>

                  <button className='w-full bg-purple-600 text-white py-2 rounded-md shadow-md mt-6 hover:bg-purple-700 transition-all' onClick={handleSignup}>Login </button>
              </form>     
          </div>
    </div>
  )
}

export default Signup
