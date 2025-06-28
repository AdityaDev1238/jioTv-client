import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'


function Login() {

  const[name,setName]=useState()
  const[password,setPassword]=useState()

  const navigate=useNavigate()

 const clickme=(e)=>{
   
  e.preventDefault()
  
  axios.post('http://localhost:8199/loginuser',{name,password},{ withCredentials: true })

  .then((res)=>{
   
   if (res.status === 200)
   {
    
     toast.success('Login Success')

     localStorage.setItem('isLoggedIn', 'true');
     
     setTimeout(() => navigate('/'), 2000);
   }

   else
   {
      toast.error('Invalid Data Please try Again')
   }

   setName('')
   setPassword('')

  })
  .catch((err)=>{
    toast.error('Something went wrong')
    console.log(err)
  })

 }


  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
       <ToastContainer position="top-right" autoClose={3000} />
      <h1>Login Page</h1>
       <form onSubmit={clickme}>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter name.." onChange={(e)=>setName(e.target.value)} required/>

    <label for="password">Password</label>
    <input type="text" id="password" name="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} required/>
  
    <input type="submit" value="Submit" />
    
  </form>
   <center><Link to="/new">New User? Register Now</Link></center>
    </div>
  )
}

export default Login
