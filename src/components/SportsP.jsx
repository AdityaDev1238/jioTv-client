import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SportC from './SportC'

function SportsP() {

 const[sport,setSport]=useState([])

 useEffect(()=>{
    axios.get('http://localhost:8199/showtype/sports',{ withCredentials: true })

    .then((res)=>{
        setSport(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
 },[])


  return (
    <div>

       <SportC sp={sport}></SportC> 
      
    </div>
  )
}

export default SportsP
