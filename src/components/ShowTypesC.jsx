import React from 'react'
import { Link } from 'react-router-dom'

function ShowTypesC({ types }) {
    return (
        <div  className='iframe-container'>

           {
              types.map((e)=>{

                return(
                    <>
                    
                    <div key={e.index} className='iframe-wrapper'>
                    <iframe  src={e.url}></iframe>
                    </div>
                    
                    
                    </>
                )
              })
           }




        </div>
    )
}

export default ShowTypesC
