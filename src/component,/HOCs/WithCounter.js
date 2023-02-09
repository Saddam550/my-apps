/* eslint-disable no-undef */
import React from "react";



const WithCounter = (OrginalComponent)=>{

class newCounter extends React.Component{
    state={
            count : 0
        }
        incrementCount = ()=>{
        this.setState((privsate) =>({ count:privsate.count +1}))
    }
    render(){
        const style= {
            color:"white",
            background:"black",
            border:"1px solid White"  
        }
           
        const {count, }= this.state
        return <OrginalComponent count={count} style={style} incrementCount={this.incrementCount}/>
    }


    }
    return newCounter
}


export default WithCounter