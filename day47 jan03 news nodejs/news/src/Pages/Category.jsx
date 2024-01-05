import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../Data'


function Category() {
    let { abc } = useParams()
    let display = Data.filter((a) => a.category == abc)
    return (
        <div>
            <h1>Category {abc}</h1>
            <div className="row">

                {display.map((a) => (
                    <div className="col-lg-4">
                        <div className="card">
                            <img className='w-100 hh' src={a.image} alt="" />
                            <div className="card-body">
                                <h4>{a.title}</h4>
                                Read More
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category
