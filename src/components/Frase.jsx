import React from 'react'
import App from "../App"

const Frase = (props) => {
  return (
    <div className='card-body'>
        <div className="card bg-white">          
            <div className="d-flex justify-content-center col-12">
           <div className="col-3 p-3">
            <img 
            src={
                props.imagen
            }
             alt="Homero Simpsons" />
           </div>

        <div className="col-9 container p-3">
            <div className="card-title">
                <h5>
                  {
                    props.caracter
                  }
                </h5>
            </div>
            <div className="card-text">
              <p>
              {
                props.frase
              }
              </p> 
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Frase