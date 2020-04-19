import React, { Component } from 'react';
import bg11 from '../img/bg11.jpg';
import bg22 from '../img/bg22.jpg';
import bg33 from '../img/bg33.jpg';

class carouselSlide extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="slides" className="carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active" ></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" >
                    <div className="carousel-item active" >
                        <img className= "d-block w-100" src= {bg11} alt=""/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="display-2" >KABBEE</h1>
                            <h3>Software Dev Team</h3>
                            <button className="btn btn-outline-light btn-lg" type="button">Clients</button>
                            <button className="btn btn-primary btn-lg" type="button">Login</button>
                        </div>
                    </div>
                    <div className="carousel-item " >
                        <img className= "d-block w-100" src= {bg22} alt=""/>
                    </div>
                    <div className="carousel-item " >
                        <img className= "d-block w-100" src= {bg33} alt=""/>
                    </div>>
                </div>
            </div>
         );
    }
}
 
export default carouselSlide;