import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsC from './NewsC'

function NewsP() {

 const[newss,setNewss]=useState([])

 useEffect(()=>{
    axios.get('http://localhost:8199/showtype/news',{ withCredentials: true })
    .then((res)=>{
        setNewss(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
 },[])

  return (
    <div>
      <NewsC np={newss}></NewsC>
    </div>
  )
}

export default NewsP
