import React, { Component } from 'react';
import ceo from '../img/ceo.jpg';
import FElead from '../img/FElead.jpg';
import BElead from '../img/BElead.jpg';

class Cards extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row padding">
                    <div className="col-md-4">
                        <div className="card text-center padding">
                            <img src= {ceo} className="card-img-top"/>
                            <div className="card-body">
                                <h4>Alazar Hashelit</h4>
                                <h4 className= "display-6">CEO</h4>
                                <p>lorem Ipsum Lorem Ipsum lorem ipsum lorem ipsum. lorem Ipsum Lorem Ipsum lorem ipsum lorem ipsum.</p>
                                <a className= "btn btn-outline-secondary btn-sm" >see more</a>                        
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center padding">
                            <img src= {FElead} className="card-img-top"/>
                            <div className="card-body">
                                <h4>Tomas Yemane</h4>
                                <h4 className= "display-6">FE Lead</h4>
                                <p>lorem Ipsum Lorem Ipsum lorem ipsum lorem ipsum. lorem Ipsum Lorem Ipsum lorem ipsum lorem ipsum.</p>
                                <a className= "btn btn-outline-secondary btn-sm" >see more</a>                        
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center padding">
                            <img src= {BElead} className="card-img-top"/>
                            <div className="card-body">
                                <h4>Solomon Haile</h4>
                                <h4 className= "display-6">BE Lead</h4>
                                <p>lorem Ipsum Lorem Ipsum lorem ipsum lorem ipsum. lorem Ipsum Lorem Ipsum lorem ipsum lorem ipsum.</p>
                                <a className= "btn btn-outline-secondary btn-sm" >see more</a>                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Cards;