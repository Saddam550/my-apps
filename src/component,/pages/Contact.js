/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class Contact extends Component {


     state={
            doller:"",
            TK:""
     }



      inputDollerHandelar= (e)=>{    
        let dollerValue = e.target.value*104
        this.setState({doller:dollerValue})
        
       
        
    }
    
    
     inputBdHander= (e)=>{    
        let BdValue = e.target.value
        this.setState({TK:BdValue})

        
    }
  render() {
    const {doller, TK} = this.state
  return(     
            // this is a convartor USE doller to bangladesh 
       
            <>
               <input  onChange={this.inputDollerHandelar} typy="text" placeholder=" please inter your doller..."  value={TK} ></input>
               <input onChange={this.inputBdHander}  placeholder="BD taka"  value={doller}></input>
    
            </>
        )
  }
}




