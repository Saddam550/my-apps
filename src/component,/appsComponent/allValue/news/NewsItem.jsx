import React, { Component } from 'react';
import defaultImg from '../pic/shirin.jpg';
class Newshome extends Component {


    render() {
        let { title,description,imageUrl,newUrl}= this.props
        return (
            
                          <div className="card newsCard">
                          <img className="card-img-top" src={!imageUrl?defaultImg:imageUrl} alt="undifaend" ></img>
                            <div className="card-body">
                              <h4 className="card-title">{title?title.slice(0,49):title}</h4>
                              <p className="card-text">{description?description.slice(0,79):"description"}</p>
                              <a className='btn btn-danger btn-sm' href={newUrl} target="_blank" rel="noreferrer" >Read More...</a>
                      
                            </div>
                          </div>
                     
                 
        );
    }
}
 
export default Newshome;