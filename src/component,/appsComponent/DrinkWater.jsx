import React from 'react'
import ComNames from './allValue/DrinkComponetns/ComNames'
import DrinkAbout from './allValue/DrinkComponetns/DrinkAbout'
import FiveSection from './allValue/DrinkComponetns/FiveSection'
import FourSection from './allValue/DrinkComponetns/FourSection'
import HeaderHome from './allValue/DrinkComponetns/HeaderHome'
import IconBox from './allValue/DrinkComponetns/IconBox'
import OurPost from './allValue/DrinkComponetns/OurPost'
import SectionThere from './allValue/DrinkComponetns/SectionThere'
import fastpostimg from './allValue/pic/7-600x600.jpg'

export default function DrinkWater() {
  const FValue = "our company was founded in 2020"
  const SValue = " Sunt fugit at perferendis culpa vel fuga sit nulla dolorem quidem eum voluptas quos quam quod quia non, "
  const TValue = "perferendis culpa vel fuga sit nulla dolorem quidem eum voluptas quos  Sunt fugit at quam quod quia non,  Lorem ipsum dolor sit amet consectetur adipisicing elit.porro ipsum aperiam veniam!"

  return (
    
    <div className='bg'>
      <HeaderHome/>
      <ComNames nameTitle="woter Skills" names="About Aquatrias"/>
      <DrinkAbout fastPra={FValue} secentPra={SValue} tharPra={TValue} />
      
<IconBox woterDreamText="1 pis drem" woterDeleverText=" Cencel order" woterManyText="manys" woterFishText=" fish not" />
<SectionThere/>

<div className='bgbody'>
<ComNames nameTitle="what inside" names="Mineral Composition" />
<FourSection/> </div>

<>
<ComNames nameTitle="clients" names="what our client sey" />
<FiveSection/>
</>

<>
<div className="postBG">
<ComNames nameTitle="Our Blog" names="Recent Posts" />
<div className="OurpostItem">
<OurPost postImg={fastpostimg}/>
<OurPost postImg={fastpostimg}/>
<OurPost postImg={fastpostimg}/>
<OurPost postImg={fastpostimg}/>
<OurPost postImg={fastpostimg}/>
<OurPost postImg={fastpostimg}/>
</div> 
</div>
</>
<div className='webfoter'>
  <div className="foterMenu">
    <ul>
      <li><a href="#Home">Home</a> </li>
      <li><a href="#About">About</a></li>
      <li><a href="#Delevary">Delevary</a> </li>
      <li><a href="#Mineral">Mineral</a></li>    
      <li><a href="#Clinet">Clinet</a></li>
      <li><a href="#Post">post</a></li>
      </ul>
      <input type="button" className='foterinput' value="SUBSCRIBER"/>

  </div>
 
</div> <p className="developerName">
    Developer by Saddam hossen
  </p>
    </div>
  )
}
