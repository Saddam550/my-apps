import React from 'react'
export default class Todo extends React.Component{

    state={
        todo: "",
        waring: null
    }

      HandalingValue =(e)=>{
         const fromValue = e.target.value
         const waring = fromValue.includes(".js")?"you need javascript skill to cpmplate the task. Do you have it":null
        const names={
            titleName:"my name is Saddam"
         }
           document.title=names.titleName
        

 this.setState({
        todo:fromValue,
        waring
    });

    }

   
    

    render(){
        const {todo , waring}=this.state
        return (
            <div> 
                 <fieldset>
            <p> Useing  for Class Component</p>

                <p> {todo}</p>
                < input type="text" name='name' onChange={this.HandalingValue}/>
                <h2>{waring}</h2>
        

                </fieldset>
            </div>
        )
    }
}