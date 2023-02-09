import React from "react";
import WithCounter from "./WithCounter";

const HoverCounter= (props)=>{

    const { incrementCount, count , style}= props
    return(
        <div>
            <button onClick={incrementCount} style={style}> Click Counter  Values: {count}</button>
        </div>
    )

}

export default WithCounter(HoverCounter)