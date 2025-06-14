import React from "react";

function MoviesList(){
    return(
        <div className='iframe-container'>
            {
            mov.map((e)=>{
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
export default MoviesList;