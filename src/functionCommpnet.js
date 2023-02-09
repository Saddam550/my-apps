// import "./my style/my css.css"
import React from "react"

// function functionCommponet(user) {
//     return user.FastName + '  ' +user.LastName
// }
// const user= {
//     FastName: "Shirin",
//     LastName: "sultana"

// }
// const elimentsFunction = <h3> Hello {functionCommponet(user) }</h3> 
// export default elimentsFunction()


const p = React.cloneElement("h1" , null, "Hello word")
console.log(p)