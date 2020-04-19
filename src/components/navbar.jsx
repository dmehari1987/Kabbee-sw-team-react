import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <Link className= "navbar-brand" to= "#"><img src= {logo} alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-toggle= "collapse" 
                        date-target= "#navbarResponsive" >
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive" >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Connect
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;