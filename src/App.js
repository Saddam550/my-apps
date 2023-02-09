
import React from 'react';
// import Clock from './component,/Clock';
// import Composition from "./component,/Composition";
// import From from './component,/From';
// import Handling from './component,/Handling';
// import Calculator from "./component,/lifting state up/Calculator";
// import Navber from './component,/nav/Navber';
// import Text from "./component,/Composition vs Inheritance/Text"
// import Braket from './component,/Composition vs Inheritance/composition/Braket';
// import Eimji from './component,/Composition vs Inheritance/composition/Eimji';
// import Text from './component,/Composition vs Inheritance/composition/Text';
// import ClickCounter from './component,/HOCs/ClickCounter';
// import HoverCount from './component,/HOCs/HoverCount'

// import Todo from './component,/ReactHooks/Todo';
// import UseStateFuntion from './component,/ReactHooks/UseState';
// import ClickCounter from './component,/render props/ClickCounter';
// import Counter from './component,/render props/counter';
// import HoverCounter from './component,/render props/HoverCounter';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Blogs from './component,/pages/Blogs';
import Contact from './component,/pages/Contact';
import Home from './component,/pages/Home';
import Layout from './component,/pages/Layout';
import NoPage from './component,/pages/NoPage';
import Pdf from './component,/pages/Pdf';
import MyFrom from './froms/Froms';


// AppsComponent imports start================================
import BlurryLoding from './component,/appsComponent/BlurryLoading';
import Calculator from './component,/appsComponent/Calculator';
import ChatApps from './component,/appsComponent/ChatApps';
import ChessGame from './component,/appsComponent/ChessGame';
import ColorPikker from './component,/appsComponent/ColorPikker';
import DrinkWater from './component,/appsComponent/DrinkWater';
import EbookSite from './component,/appsComponent/EbookSite';
import FacebookClone from './component,/appsComponent/FacebookClone';
import FoodOrder from './component,/appsComponent/FoodOrder';
import FQACollapse from './component,/appsComponent/FQACollapse';
import HoverBroard from './component,/appsComponent/HoverBroard';
import ImageCarousel from './component,/appsComponent/ImageCarousel';
import ImageFeed from './component,/appsComponent/ImageFeed';
import MovieApp from './component,/appsComponent/MovieApp';
import NodeApps from './component,/appsComponent/NodeApps';
import PasswordCan from './component,/appsComponent/PasswordCan';
import Pokedok from './component,/appsComponent/Pokedok';
import Post from './component,/appsComponent/Post';
import QuizApps from './component,/appsComponent/QuizApps';
import RangeSlider from './component,/appsComponent/RangeSlider';
import ScrollAnimation from './component,/appsComponent/ScrollAnimation';
import SoundBoard from './component,/appsComponent/SoundBoard';
import StickyNavber from './component,/appsComponent/StickyNavber';
import StopWatch from './component,/appsComponent/StopWatch';
import ThemeClock from './component,/appsComponent/ThemeClock';
import ToastNotifcation from './component,/appsComponent/ToastNotifcation';

import { AuthProvider } from './assets/AuthContext';
import BookOrder from './component,/appsComponent/allValue/EbookComponents/BookOrder';
import ConfromOrder from './component,/appsComponent/allValue/EbookComponents/ConfromOrder';

// AppsComponent imports End================================

// news Component end ===================
 
import RejultShit from './component,/pages/RejultShit';
function App() {

  return (
<div>


<BrowserRouter>
    <Routes>

 
    <Route path="/" element={<Layout />}>
            <Route path="home" element= {<Home />} />
            <Route path='Blogs' element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route  element={<RejultShit />} />
            <Route path="pdf" element={<Pdf />} />  

            <Route path="../appsComponent/BlurryLoading" element={<BlurryLoding />} />             
            <Route path="../appsComponent/Calculator" element={<Calculator/>}  /> 
            <Route path="../appsComponent/ChatApps" element={<ChatApps />} />  
            <Route path="../appsComponent/ChessGame" element={<ChessGame />} />  
            <Route path="../appsComponent/ColorPikker" element={<ColorPikker />} />  
            <Route  path="../appsComponent/DrinkWater"   element={<DrinkWater />} />  
            <Route path="../appsComponent/EbookSite" element={<EbookSite />} /> 
            {/* <Route index element={<EbookSite />} />  */}
            <Route path="../appsComponent/FacebookClone" element={<FacebookClone />} />  
            {/* <Route index element={<FacebookClone />} />   */}
            {/* <Route index element={<FoodOrder />} />   */}
            <Route path="../appsComponent/FoodOrder" element={<FoodOrder />} />  
            <Route path="../appsComponent/FQACollapse" element={<FQACollapse />} />  
            <Route path="../appsComponent/HoverBroard" element={<HoverBroard />} />  
            <Route path="../appsComponent/ImageCarousel" element={<ImageCarousel />} />  
            {/* <Route index element={<ImageCarousel />} />   */}
            <Route path="../appsComponent/ImageFeed" element={<ImageFeed />} /> 
            {/* <Route index element={<MovieApp />} />   */}
            <Route path="../appsComponent/MovieApp" element={<MovieApp />} />  
            <Route path="../appsComponent/NodeApps" element={<NodeApps />} />  
            <Route path="../appsComponent/PasswordCan" element={<PasswordCan />} />  
            <Route path="../appsComponent/Pokedok" element={<Pokedok />} />  
            {/* <Route path="../appsComponent/QuizApps" element={<QuizApps />} />   */}
                
   < AuthProvider>
            <Route index element={<QuizApps />} /> 
             </AuthProvider>
            <Route path="../appsComponent/RangeSlider" element={<RangeSlider />} /> 
            <Route path="../appsComponent/ScrollAnimation" element={<ScrollAnimation />} />  
            <Route path="../appsComponent/SoundBoard" element={<SoundBoard />} />  
            <Route path="../appsComponent/StickyNavber" element={<StickyNavber />} />  
            <Route path="../appsComponent/StopWatch" element={<StopWatch />} />  
            <Route path="../appsComponent/ThemeClock" element={<ThemeClock/>} />  
            <Route path="../appsComponent/ToastNotifcation" element={<ToastNotifcation />} /> 
            <Route path="../appsComponent/allValue/EbookComponents/BookOrder" element={<BookOrder />} /> 
            <Route path="../appsComponent/allValue/EbookComponents/ConfromOrder" element={<ConfromOrder />} /> 
            <Route path="../appsComponent/Post" element={<Post />} /> 





            <Route path="froms/from" element={<MyFrom />} />
            <Route path="*" element={<NoPage />} />
         
      </Route> 
     
    </Routes>
    </BrowserRouter>







{/* <Navber/>
<Clock/>
<Handling/>
<From/>
<Calculator/>
<Composition/> */}

{/* inharitence start */}
{/* <Text/> */}
{/* inharitence end */}

{/* composition start */}
{/* <Eimji>
{({addEmoji})=> (
<Braket>
{({addBraket}) =><Text addEmoji=
{addEmoji} addBraket={addBraket}/> } 
</Braket>
)}
  </Eimji> */}
{/* composition end */}


{/* <ClickCounter/> */}
{/* <HoverCount/> */}
{/* <Counter name="pas to string"/> */}
{/* <Counter name={()=> ' pas to function'}/> */}
{/* <Counter render={(count, incrimentCount)=><ClickCounter count={count}  incrimentCount={incrimentCount} />} /> */}


{/* < Counter render={(count , incrimentCount)=>< HoverCounter count={count} incrimentCount={incrimentCount}/>}/> */}



{/* <Todo/> */}
{/* <UseStateFuntion/> */}

</div>
  )
}

export default App;
