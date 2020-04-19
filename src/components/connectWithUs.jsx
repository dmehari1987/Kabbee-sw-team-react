import React, { Component } from 'react';
import {FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class  ConnectWithUs extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row text-center">
                    <div className= 'display-3 col-md-12 mt-3'>
                        <h2>Connect with us</h2>
                    </div>
                    <div className="social-media col-md-12 ">    
                        <Link><FaFacebookSquare className= 'facebook' color= 'blue' /></Link>
                        <Link><FaTwitter className= 'twitter' color= 'blue' /></Link>
                        <Link><FaInstagram className= 'instagram' color= 'orange' /></Link>
                        <Link><FaYoutube className= 'youtube' color= 'red' /></Link>
                        <Link><FaWhatsapp className= 'whatsapp' color= 'green' /></Link>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ConnectWithUs;