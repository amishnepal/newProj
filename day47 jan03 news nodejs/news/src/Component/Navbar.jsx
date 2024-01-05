import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Aboutus from '../Pages/Aboutus'
import CatData from '../CatData'
import Category from '../Pages/Category'
import Details from '../Pages/Details'
import Sajan from '../Pages/Sajan'
import Nopage from '../Pages/Nopage'



function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/san">About Us</Link>
        </li>
        {CatData.map((a)=>(
          <li className="nav-item" key={(a)}>
          <Link className="nav-link" to={`/cat/${a}`}>{a}</Link>
        </li>
        )
        )}
       
      </ul>
      
    </div>
  </div>
</nav>
<Routes>
  <Route path="/" element={<Sajan/>}/>
  <Route path="/san" element={<Aboutus/>}/>
  <Route path="/cat/:abc/" element={<Category/>}/>
  <Route path="/details/:id" element={<Details/>}/>
  <Route path="/*" element={<Nopage/>}/>
</Routes>

      
    </>
  )
}

export default Navbar
