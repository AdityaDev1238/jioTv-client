
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import Coursuel from './Coursuel'
import CoursuelP from './CoursuelP'
import ShowsP from './ShowsP'
import ShowTypes from './ShowTypes'



function All() {

  


  return (
    <div>
      
 
       <h1>All Page</h1>

      <CoursuelP/>

      <h1>Channels</h1>

      <ShowsP/>

      <h1>Shows</h1>

      <ShowTypes/>


    

    

    </div>
    
  )
}

export default All
