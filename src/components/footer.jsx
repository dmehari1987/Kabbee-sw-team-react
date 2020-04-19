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
                        <p>996-657-7923</p>
                        <p>aaaaa@ggggg.com</p>
                        <p>Khartoum, Sudan, Africa</p>
                    </div>
                    <div className="col-md-4">
                        <hr className= "light" />
                        <p>Our Timing</p>
                        <hr className= "light" />
                        <p>Sunday - Thursday</p>
                        <p>8:00 am - 5:00 pm</p>
                        <p>Friday and Saturday closed</p> 
                    </div>
                    <div className="col-md-4">
                        <hr className= "light" />
                        <p>Address</p>
                        <hr className= "light" />
                        <p>Jrief, Street M.Noor</p>
                        <p>Sudan</p>
                        <p>P.O.Box: 555</p> 
                    </div>
                    <div className="col-12">
                        <hr className= "light" />
                        <h5>&copy; kabbee.org</h5>
                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;