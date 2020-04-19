import React, { Component } from 'react'

class ProgrammingLang extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid padding pt-3">
                <div className="row text-center padding">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <i className= "fas fa-code"></i>
                        <h3>HTML5</h3>
                        <p>We use HTML5 as our markup language</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <i className= "fas fa-bold"></i>
                        <h3>Bootstrap</h3>
                        <p>We use Bootstrap as our frontend Library</p>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <i className= "fab fa-js"></i>
                        <h3>JavaScript</h3>
                        <p>We use JavaScript as our scripting language</p>
                    </div>
                </div>
                <hr />
            </div>
         );
    }
}
 
export default ProgrammingLang;