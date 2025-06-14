import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies'

function MoviesC() {

  const[movie,setMovie]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8199/showtype/movie')

   .then((res)=>{

    setMovie(res.data)
   })

  },[])


  return (
    <div>
      <Movies mov={movie}/>
    </div>
  )
}

export default MoviesC
