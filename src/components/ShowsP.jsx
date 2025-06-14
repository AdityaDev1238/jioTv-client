import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowsC from './ShowsC'

function ShowsP() {
  
 const[channels,setChannels]=useState([])

  useEffect(()=>{
     axios.get('http://localhost:8199/')
     .then((res)=>{
        setChannels(res.data)
     })
  },[])
  


  return (
    <div>

        <ShowsC datas={channels}/>
      
    </div>
  )
}

export default ShowsP
