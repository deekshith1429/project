import React from 'react'
import {Link} from 'react-router-dom'
import './css/nav.css'

  const Nav=()=> {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info text-dark ">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
          <Link className="nav-link " to="/home">Home</Link>
          <Link className="nav-link " to="/DSroute">World Heritage's</Link>
          <Link className="nav-link " to="/apidata">Customer info</Link>
          <Link className="nav-link " to="/registration">Registration</Link>
         
      
      
          
          
          </div>
        </div>
      </nav>
    )
}
export default Nav


