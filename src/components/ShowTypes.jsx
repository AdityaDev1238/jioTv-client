import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowTypesC from './ShowTypesC'

function ShowTypes() {

    const[showsall,setShowsAll]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8199/getAllShows')

        .then((res)=>{

            setShowsAll(res.data)
        })
    },[])
    



  return (
    <div>
      
     <ShowTypesC types={showsall}/>


    </div>
  )
}

export default ShowTypes
