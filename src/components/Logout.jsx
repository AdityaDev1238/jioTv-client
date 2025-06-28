import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Logout() {

  
 const navigate=useNavigate()

  
useEffect(()=>{
  axios.post("http://localhost:8199/logout",{},{ withCredentials: true })

     .then((res)=>{
       
      if(res.data=='Logout Successfully')
      {
        localStorage.removeItem('isLoggedIn');
        toast.success('Logged out')
      }
      else
      {
        toast.warn('No Active Sessions')
      }

      setTimeout(()=>{
        navigate("/login")
      },1000)


     })
     .catch((err)=>{
      console.log(err)
     })
     

},[navigate])



  return (
    <div>
      <h1 style={{color:'red'}}>Logout ...</h1>
    </div>
  )
}

export default Logout
