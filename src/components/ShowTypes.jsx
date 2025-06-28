import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowTypesC from './ShowTypesC'

function ShowTypes() {

    const[showsall,setShowsAll]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8199/getAllShows',{ withCredentials: true })

        .then((res)=>{

            setShowsAll(res.data)
        })
        .catch((err)=>{
      console.log(err)
    })
    },[])
    



  return (
    <div>
      
     <ShowTypesC types={showsall}/>


    </div>
  )
}

export default ShowTypes
