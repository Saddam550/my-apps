import React from 'react';

export default class From extends React.Component{
state={
    values: "",
    text:"righting now",
    library: "React",
    chackBox:"true"
}



   changeValue = (e)=>{
   
if(e.target.type==="text"){
    this.setState({
        values: e.target.value
    })
}else if(e.target.type==="textarea"){
    this.setState({
        text: e.target.value
    })

}else if(e.target.type==="select-one"){
    this.setState({
        library:e.target.value
       
    })   
}else if(e.target.type==="on"){
    this.setState({
        chackBox:e.target.chacked
       
    })
    
}
   }

   submitHandil = (e)=>{
    const {values, text, library, chackBox}  = this.state
e.preventDefault()
console.log( `${values}  ${text}  ${library}  ${chackBox}`)
}
         

render(){
  const {values, text, library, chackBox}  = this.state


    const style = {
        background: "red",
        textTransform: "capitalize",
        display: "inline-block",
        padding:"2px 5px"
       }

    return(

       
<div>
           
<form onSubmit={this.submitHandil}>
        < input type="name" value={values} placeholder="What is Your Name" onChange={this.changeValue}/>
   
    <br/> 
    <p>{values}</p>
     <textarea name='text' style={style} value={text} onChange={this.changeValue} ></textarea>     
     <p>{text}</p>

     <select value={library} onChange={this.changeValue}>
        <option>react</option>
        <option>angular</option>
        <option>Veo</option>
        <option>Javascript</option>
        <option>PHP</option>
        <option>jqurey</option>
     </select>

     <input type="checkbox" onChange={this.changeValue}  false/>
     <p>{chackBox}</p>
  <input type="submit"value="Submit" />
       </form>
   
</div>
    )
}
}





