import React from 'react'
import {Link} from 'react-router-dom'
function Coursuel({cr}) {
  return (
    <div >
    
    <div id="carouselExampleControls" className="carousel slide carousel-medium" data-ride="carousel" data-interval="3000" >
    <div className="carousel-inner">
        {cr && cr.map((e, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={e.id}>
              <img className="d-block w-100 carousel-img" src={e.url} />
              <div className="carousel-caption d-none d-md-block">
                <Link to={e.vurl} target="_blank"  className="btn btn-primary">
                  Watch Video
                </Link>
              </div>
            </div>
          ))}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      
    </div>
  )
}

export default Coursuel
