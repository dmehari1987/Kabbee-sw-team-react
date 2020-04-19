import React, { Component } from 'react';
import { FaReact, FaAngular, FaBootstrap } from 'react-icons/fa';

class ProgrammingLang extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid padding pt-3">
                <h3 className='display-4 text-center' >We Use...</h3>
                <div className="prog row text-center padding">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <FaReact color= 'blue' size= '5rem' />
                        <h3>REACT</h3>
                        <p>We use HTML5 as our markup language. We use HTML5 as our markup language.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <FaAngular color= 'red' size= '5rem' />
                        <h3>Angular</h3>
                        <p>We use Bootstrap as our frontend Library. We use HTML5 as our markup language.</p>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <FaBootstrap color= 'purple' size= '5rem' />
                        <h3>Bootstrap</h3>
                        <p>We use JavaScript as our scripting language. We use HTML5 as our markup language.</p>
                    </div>
                </div>
                <hr />
            </div>
         );
    }
}
 
export default ProgrammingLang;