import React from 'react'
import { Link } from 'react-router-dom'

function MusicC({datas}) {
  return (
     <div className='iframe-container'>

            
            {
            datas.map((e, index) =>{
                return(
                    <>
                    
                    {/* <div key={e.index} className='iframe-wrapper'>
                    <iframe  src={e.url} ></iframe>
                   
                    </div> */}

                    
                    <div key={index} className="card" >
                    <img
                        className="card-img-top"
                        src={e.iurl}
                        alt="Card image cap"
                        
                    />
                    <div className="card-body">
                        <h5 className="card-title">{e.title}</h5>
                        <Link to={e.url} className="btn btn-primary" target="_blank" rel="noreferrer">
                        Watch
                        </Link>
                    </div>
                    </div>



                     
                                
                    
                    </>

                )
            })
        }

        </div>
  )
}

export default MusicC
