import Footer from "../Component/Footer"
import Header from "../Component/Header"
import Navbar from "../Component/Navbar"
import Home from "../Pages/Home"
import "../sajan.scss"




function Website(){
    return <>
    <Header/>
    <Navbar/>
    <Home tt="men's clothing"/>
    <Home tt="electronics"/>
    <Home tt="women's clothing"/>
    <Footer/>
    </>
}

export default Website