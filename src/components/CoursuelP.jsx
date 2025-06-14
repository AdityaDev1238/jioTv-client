import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Coursuel from './Coursuel'

function CoursuelP() {

    const[data,setData]=useState()

  useEffect(()=>{
    axios.get('http://localhost:8199/getAllBanner')

    .then(res=>{
        
        console.log(res.data)
        setData(res.data);
    })
  },[])
  return (
    <div>
      <Coursuel cr={data}></Coursuel>
    </div>
  )
}

export default CoursuelP
