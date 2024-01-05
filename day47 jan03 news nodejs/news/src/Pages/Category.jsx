import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../Data'


function Category() {
    let { abc } = useParams()
    let display = Data.filter((a) => a.category == abc)
    return (
        <div className="container">
            <h1>Category {abc}</h1>
            <div className="row">
            <h1>{display.length === 0 ? "no product found" : ""}</h1>


                {display.map((a) => (
                    <div className="col-lg-4" key={a.id}>
                        <div className="card">
                            <img className='w-100 hh' src={a.image} alt="" />
                            <div className="card-body">
                                <h4>{a.title}</h4>
                                <Link to={`/details/${a.id}`}>Read More</Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category
