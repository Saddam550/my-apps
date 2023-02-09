
import React from "react"

import WithCounter from './WithCounter'


const HoverCount  =(props)=>{

 
        let {count , incrementCount , style} = props
        return (
            <div>
                <h1 style={style} onMouseMove={incrementCount}>
                Mouse Move  Value : {count}
                </h1>
            </div>
        )


}
export default  WithCounter(HoverCount)