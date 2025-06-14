import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataAll() {

  const[data,setData]=useState()

  useEffect(()=>{
    axios.get('http://localhost:8199/getAllBanner')

    .then(res=>{
        
        console.log(res.data)
    })
  },[])



  return (
    <div>
      
    </div>
  )
}

export default DataAll
