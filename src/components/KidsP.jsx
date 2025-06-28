import React from 'react'
import KidsC from './KidsC'
import { useState,useEffect } from 'react'
import axios from 'axios'


function KidsP() {

  const[little,setLittle]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8199/showtype/toon',{ withCredentials: true })

   .then((res)=>{

    setLittle(res.data)
   })
   .catch((err)=>{
      console.log(err)
    })

  },[])




  return (
    <div>
      <KidsC datas={little}></KidsC>
    </div>
  )
}

export default KidsP
