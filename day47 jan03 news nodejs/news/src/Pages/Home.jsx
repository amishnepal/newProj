import React from 'react';
import Data from '../Data';

function Home(props) {
    let dd=Data.filter((a)=>a.category==props.tt)
    return (
        <>
            <section className='container py-4'>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h3 className='fw-bold'>{props.tt}</h3>
                    </div>
                    <div className="col-lg-6 text-end">
                        <button className='btn btn-primary btn-sm'>Read All</button>
                    </div>
                </div>

                <div className="row">
                    
                    {dd.slice(0,3).map((a) => (
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
            </section>
        </>
    );
}

export default Home;
