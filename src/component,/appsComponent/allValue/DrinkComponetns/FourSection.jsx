import React from 'react'
import woterImg from '../pic/woter.jpg'


export default function FourSection() {
  return (
 <div className='mineralBody' id='Mineral'>
   <div className="MineralRight">
          <div className="spaseing">
          <div className="minerelTitle">Minarel</div>     
            <div className="minerelName">pots</div>     
            <div className="minerelTDes">hello my mineral woterpots</div> 
          </div>
          <div className="spaseing">
          <div className="minerelTitle">Minarel</div>     
            <div className="minerelName">pots</div>     
            <div className="minerelTDes">hello my mineral woterpots</div> 
          </div>
          <div className="spaseing">
          <div className="minerelTitle">Minarel</div>     
            <div className="minerelName">pots</div>     
            <div className="minerelTDes">hello my mineral woterpots</div> 
          </div>
           
    </div>   
    <div className="mineralImg">
      <img src={woterImg} alt="woter pot img" />
    </div>

    <div className="MineralLeft">
    <div className="spaseing">
          <div className="minerelTitle">Minarel</div>     
            <div className="minerelName">pots</div>     
            <div className="minerelTDes">hello my mineral woterpots</div> 
          </div>
          <div className="spaseing">
          <div className="minerelTitle">Minarel</div>     
            <div className="minerelName">pots</div>     
            <div className="minerelTDes">hello my mineral woterpots</div> 
          </div>
          <div className="spaseing">
          <div className="minerelTitle">Minarel</div>     
            <div className="minerelName">pots</div>     
            <div className="minerelTDes">hello my mineral woterpots</div> 
          </div>

    </div>  
    </div>
  )
}
