import React from "react"



class Clock extends React.Component{
  constructor (props){
    super(props)
    this.state={date : new Date()}
  }
    
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        date:new Date()
      }) 
    },1000)
  }
  render(){
      return(
  <h1> This Is currnt Time with Bangladesh <br/> 
  <span className="targetIcon">↓</span>
  {this.props.children} {this.state.date.toLocaleTimeString(this.props.locale)} 
  </h1>
      )
    }
  
}
export default Clock  


