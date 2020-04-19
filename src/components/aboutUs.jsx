import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import aboutus from '../img/aboutus.jpg'

class AboutUs extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid padding">
                <h3 className= "text-center">About Us</h3>
                <div className="row padding offset-1">
                    <div className="col-md-6 padding">
                        <h3>If you want...</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum lorem ipsum.</p>
                        <p>Dolor repudiandae aspernatur maxime numquam accusamus similique, dolore itaque nemo nostrum fuga? Vitae amet repellat quibusdam ab officia fugiat suscipit excepturi sit!
                        Accusamus, dolor perspiciatis, rerum aliquam temporibus distinctio 
                        </p>
                        <p>quasi minus voluptatem laboriosam praesentium officiis, perferendis nulla debitis illum eveniet velit eius dicta optio adipisci? Commodi, accusamus voluptas! Reiciendis tenetur magni quam.</p>
                        <a to="" className= "btn btn-primary btn-sm" >learn more</a>
                    </div>
                    <div className="col-lg-6 padding mt-3">
                        <img src={aboutus} className= "container-lg" alt=""/>
                    </div>
                </div>
                <hr className= "my-4" />
            </div>
         );
    }
}
 
export default AboutUs;