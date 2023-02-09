import React from "react";

class HoverCounter extends React.Component{
    
    render(){
        const {count , incrimentCount}= this.props
        return (
            <h1 onMouseMove={incrimentCount}> This is Counter Hadding: {count}</h1>
        )
    }
}
export default HoverCounter