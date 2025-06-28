import React from 'react'
import { Link } from 'react-router-dom'

function NewsC({np}) {
  return (
    <div className='iframe-container'>
      
      {
         np.map((e)=>{
            return(
                <>
                {/* <div key={e.index} className='iframe-wrapper'>
                    <iframe  src={e.url}></iframe>
                    </div> */}

                    <div key={e.id} className="card" >
                    <img
                        className="card-img-top"
                        src={e.iurl}
                        alt="Card image cap"
                        
                    />
                    <div className="card-body">
                        <h5 className="card-title">{e.title}</h5>
                        <Link to={e.url} className="btn btn-primary" rel="noreferrer">
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

export default NewsC

// <iframe width="560" height="315" src="https://www.youtube.com/embed/Saje4-TqRdo?si=-Yk7pjfu9VTowjg3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
// <iframe width="560" height="315" src="https://www.youtube.com/embed/kfRWmfu75zI?si=EC6bs5YU-yaF1XSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
