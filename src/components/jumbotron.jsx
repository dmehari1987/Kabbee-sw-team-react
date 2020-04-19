import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Jumbotron extends Component {
    state = {  }
    render() { 
        return ( 
            <div className= "container-fluid">
                <div className="row jumbotron">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                        <p className= "lead">Lorem ipsum is a placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                        <Link to= "#">
                            <button className= "btn btn-outline-secondary btn-lg" >
                                What we Do
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Jumbotron;