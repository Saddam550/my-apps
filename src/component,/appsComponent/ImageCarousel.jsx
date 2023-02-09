
import { useState } from 'react'
import fristImg from './allValue/pic/600 copy.jpg'
import SecenttImg from './allValue/pic/headers.jpg'
import thirttImg from './allValue/pic/shirin.jpg'
import LoginPage from './LoginPage'
export default function ImageCarousel() {


  
  let indexImg = 2
  const ImageCarouselData = {
    carroselData:[
      {
        img:fristImg
      },
      {
        img:SecenttImg
      },
      {
        img:thirttImg
      },
      {
        img:fristImg
      },
      {
        img:SecenttImg
      },
      {
        img:thirttImg
      },
      {
        img:fristImg
      },
      {
        img:SecenttImg
      },
      {
        img:thirttImg
      },
      {
        img:fristImg
      },
      {
        img:SecenttImg
      },
      {
        img:thirttImg
      },

    ]
  } 



    indexImg+=5
    const FilterIMg =  ImageCarouselData.carroselData.slice(0,indexImg)
    
    const [userLoginData, setuserLoginData] = useState()

    const getData = (Logindata)=>{
  setuserLoginData(Logindata);
}

const user = userLoginData

  return (
    <>
      {!user? (
        <LoginPage onUserData={getData}/>
      ):(
            <div className='carosel'>
    <p>{userLoginData}</p>
<div className="imageOverLi">
<form onSubmit={getData} ></form>
<div className="caroselImg">
{FilterIMg.map((item, index)=>
<img src={item.img} alt="images" srcset={item.img} />
) }
</div>
</div>
{/* <h1 contentEditable={true} title='Saddam'>my name Is:</h1>
<a href={fristImg} download={fristImg}>Download</a>
<marquee  direction={false}>my name is Saddam hossen</marquee> */}

    </div>
  
      )
    
    

  }  </>
  )
}
