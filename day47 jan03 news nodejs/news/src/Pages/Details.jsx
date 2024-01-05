import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data'


function Details() {
  let {id}=useParams()
  let display=Data.find((a)=>a.id==id)
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <img className="w-100" src={display.image}/>
        </div>
        <div className="col-lg-8">
          <h3>{display.title}</h3>
          <p>{display.description}</p>
          <p>Price:{display.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Details
