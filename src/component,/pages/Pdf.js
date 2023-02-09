import { useState } from "react";

export default function Pdf() {

    const [inputValues, setting]=useState("")

    const PdfGenarator= (e)=>{
        let pdfInputValues = e.target.value   ;
        setting(pdfInputValues)
    }
    
    return(
     <>
     <input type="text" onChange={PdfGenarator} ></input>
     {/* <img src={<PdfCdn/>}></img> */}
     <p>{inputValues}</p>

     </>     
    )
}