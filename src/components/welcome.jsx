import React, { Component } from 'react'

class Welcome extends Component {
    state = {  }
    render() { 
        return ( 
            <div className= "container-fluid welcome padding">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className= "display-4" >Automate Your Job With US!</h1>
                    </div>
                    <hr />
                    <div className="col-12">
                        <p className= "lead" >Lorem ipsum is a placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful.</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Welcome;