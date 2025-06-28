import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

function Change() {

 const[name,setName]=useState()
 const[password,setPassword]=useState()

 const navigate=useNavigate()

 function clickme(e)
 {
    e.preventDefault()
    axios.put('http://localhost:8199/changepassw',{name,password})

   .then((res)=>{
      
    if(res.data=='Changed')
    {
       toast.success('Password Changed Successfully')
       setTimeout(()=>navigate('/login'),2000)
        
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
      <h1>Change Password</h1>
      <ToastContainer position="top-right" autoClose={3000} />
   <form onSubmit={clickme}>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter name.." onChange={(e)=>setName(e.target.value)} required/>

    <label for="password">Password</label>
    <input type="text" id="password" name="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} required/>
  
    <input type="submit" value="Submit" />
    
  </form>

    </div>
  )
}

export default Change
