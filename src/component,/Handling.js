import React from "react";




// var mineValue ;
// const changeValue  = "My Name Is Saddam Hossen"

// class Handling extends React.Component{
  
// state = {local : mineValue}

// handlinkBtn = ()=> {
// this.setState({  
//   local : changeValue
// })
// }
// render(){
//   const { local} = this.state
//   return(
//     <div>
//       <p>{local}</p>
//       <button onClick={this.handlinkBtn }> Click Here</button>
//     </div>
//   )
// }
// } ;
  

//   let index = 0

// const ShirinValue = "I am Shirin";
// const SaddamValue = "I am Saddam hossen";
// class Handling extends React.Component{

// state = {FastName : ShirinValue, lastName: SaddamValue }

//   handling =()=> {


//       this.setState({          
//         FastName:SaddamValue
//      });
     
  
//       this.setState({
//         lastName:ShirinValue
//      });
   




//   }

//   render(){
//     const {FastName , lastName } =this.state
// let button

// if (index<1)  {

//   let clocks =  new Date().toLocaleTimeString("bn-BD")
//   button=  <button onClick={this.handling}> {clocks} {FastName }</button>

        
//            index++
       

//   }  else {
//     let clocks =  new Date().toLocaleTimeString()
//           button=  <button onClick={this.handling}>{clocks} {lastName }</button>       
//           index=0
          

//         }
//     return(
 
//     <div>
// {button}
   
//     </div>
//     )
//   }
// }



// class Handling extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = console.log(this.handleClick.bind(this));
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// sabse badhker hmm2 movie name


class Handling extends React.Component{

  constructor(props){
super(props);
this.state={toggleOn: true}
this.HandilClick = this.HandilClick.bind(this)

  }

  HandilClick(){
this.setState(state =>({
  toggleOn: ! state.toggleOn
}))
  }
  render(){
    return(
  <div>
    <p> handling class</p>
    <button onClick={this.HandilClick}> 
      {this.state.toggleOn ? "ON" : "OFF"}
         </button>
  </div>
    )
  }
}







export default Handling