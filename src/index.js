 import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './my style/my css.css';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
  <StrictMode>
<App/>


 

  </StrictMode>
);
reportWebVitals();

console.clear()


// const p = React.cloneElement("h1" , null, "Hello word")
// console.log(p)


// function Clock({locale}) {
//   return(
//     <h1>{new Date().toLocaleTimeString(locale)} </h1>
//   )
// }  

// const clocks = <div>
// <Clock locale="bn-BD"/>
// <Clock locale="ln-eg"/>
// </div>
//   setInterval(()=>{
//     ReactDOM.render( clocks, document.getElementById('root'));
//   },1000)



// sumit cpmponent class 6 ===============================
// function Names() {
  // return(
    // <p className='shirin'>My Name Is Shirin ! I am student with class Eight</p>
  // )
// }
// ReactDOM.render( Names(), document.getElementById('root'));













