import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';



function ShowsC({datas}) {
  return (
    <div className='shows-container'>
      
      {
        datas.map((e)=>{
          return(
            <>
             
             <div className="card show-card" >
            <img className="card-img-top" src={e.imageurl} alt="Not found"/>
            <div className="card-body">
              <h5 className="card-title">{e.cname}</h5>

              <Link to={e.vurl} className="btn btn-primary">Watch</Link>
            </div>
          </div>
            
            
            </>
          )
        })
      }

      
      
    </div>
  )
}

export default ShowsC
