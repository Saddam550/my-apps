import React from "react"
export default function BoilngVardict({c= 0}){

    if (c>100) {
        return <p>this Woter wold boil</p>
        
    }
    return <p> this is woter woid not Boil</p>
}