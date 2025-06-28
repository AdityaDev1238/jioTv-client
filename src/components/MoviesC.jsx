import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import MoviesList from './MoviesList'

function MoviesC() {

  const[movie,setMovie]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8199/showtype/movie',{ withCredentials: true })

   .then((res)=>{

    setMovie(res.data)
   })
   .catch((err)=>{
      console.log(err)
    })

  },[])


  return (
    <div>
      <MoviesList mov={movie}></MoviesList>
    </div>
  )
}

export default MoviesC
