import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConnectWithUs extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid padding">
                <div className="row text-center padding">
                    <div className="col-12">
                        <h2>Connect With Us</h2>
                    </div>
                    <div className="col-12 social padding">
                        <Link to="#"><i className= "fab fa-facebook" ></i></Link>
                        <Link to="#"><i className= "fab fa-instagram" ></i></Link>
                        <Link to="#"><i className= "fab fa-twitter" ></i></Link>
                        <Link to="#"><i className= "fab fa-youtube" ></i></Link>
                        <Link to="#"><i className= "fab fa-google-plus-g" ></i></Link>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ConnectWithUs;