import React from 'react'
import ReactDOM from 'react-dom/client'
import './q.css'
import Header from "./Header"
import Footer from "./Footer"
import Services from "./Services"
import "./style.scss"


var fname="sajan kafle"




ReactDOM.createRoot(document.getElementById('sajan')).render(
  <>
  <Header/>
  <Services name="SEO"/>
  <Services name="Web"/>
  <Services name="Development"/>
  <Footer/>
  </>
)