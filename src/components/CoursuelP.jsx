import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Coursuel from './Coursuel'

function CoursuelP() {

    const[data,setData]=useState()

  useEffect(()=>{
    axios.get('http://localhost:8199/getAllBanner',{ withCredentials: true })

    .then(res=>{
        
        console.log(res.data)
        setData(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
      <Coursuel cr={data}></Coursuel>
    </div>
  )
}

export default CoursuelP
