import React from 'react'
import MusicC from './MusicC'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


function MusicP() {
  
    const[music,setMusic]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8199/showtype/music',{ withCredentials: true })

   .then((res)=>{

    setMusic(res.data)
   })
   .catch((err)=>{
      console.log(err)
    })

  },[])





  return (
    <div>
       <MusicC datas={music}></MusicC>
    </div>
  )
}

export default MusicP
