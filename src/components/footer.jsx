import React, { Component } from 'react';
import logo from '../img/logo.png';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className= "container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-4">
                        <img src={logo} alt=""/>
                        <hr className="light" />
                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;