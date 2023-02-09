
// const groupFroms = {
//     name:'',
//     type:'',
//     onchange:'',
//     onblur:'',

import { useState } from "react"

    
// }
// export default  groupFroms


export default function MyFrom() {
  const [values, setValue] = useState("")
const handilChange = (e)=>{
  setValue(e.target.value ) 


} 

return(
    <>   <input name={"name"} type={"text"} onChange={handilChange} value={values} label={"name"}></input>
    <br></br>    <input name={"name"} type={"text"} onChange={handilChange} value={values} label={"name"}></input>
    </>
    )
}