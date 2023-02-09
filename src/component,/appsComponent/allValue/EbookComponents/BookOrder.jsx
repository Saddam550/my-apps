import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ComNames from '../DrinkComponetns/ComNames';


const BookOrder = () => {
const height = {
    paddingBottom:" 10px "
}
const bookShow =  document.querySelector('.bookShow') 
const location = useLocation()
const {names , price, BookImage} =location.state

const [usernamedata, setusernamedata] = useState('')
const [userCountrydata, setuserCountrydata] = useState('')
const [userCitydata, setuserCitydata] = useState('')
const [userVallgedata, setuserVallgedata] = useState('')
const [userPhonedata, setuserPhonedata] = useState('')
const [userEmaildata, setuserEmaildata] = useState('')

const condition = document.querySelector('.condition') 
const spanOrder = document.querySelector('.spanOrder') 
const username = (e) => {
        setusernamedata(e.target.value)  

  
        
}
const userCountry = (e) => {
    setuserCountrydata(e.target.value)  
 
}
const userCity = (e) => {
    setuserCitydata(e.target.value)  
}
const userVallge = (e) => {
    setuserVallgedata(e.target.value)  
}
const userPhone = (e) => {
    setuserPhonedata(e.target.value)  
}
const userEmail= (e) => {
    setuserEmaildata(e.target.value)  
}
const submitBtn= () => {
  
    if (usernamedata===""  || userCountrydata==="" || userCitydata==="" || userVallgedata==="" || userPhonedata==="" || userEmaildata==="" ) {
      
        condition.classList.add("disboald")
        condition.classList.remove("visibold")

        spanOrder.classList.add("visiboldbtn")
        spanOrder.classList.remove("disboaldbtn")
      
    }else{
        
        condition.classList.remove("disboald")
        condition.classList.add("visibold")

        spanOrder.classList.remove("visiboldbtn")
        spanOrder.classList.add("disboaldbtn")


    }
}




let ShowToBigBookImg= () => {
    
    bookShow.classList.remove("control")
    bookShow.classList.add("showBookControl")
  
}
let RemoveBook= () => { 
    bookShow.classList.add("control")
    bookShow.classList.remove("showBookControl")


     
}
 

    return (
      
       <div className="orderBG">
                {/* name:   {usernamedata} <br />
                Country:  {userCountrydata} <br />
                City: {userCitydata} <br />
                Vallge: {userVallgedata} <br />
                Phone: {userPhonedata} <br />
                Email: {userEmaildata} */}
        
        <div className="titleStyle">
        <ComNames  nameTitle="book acadamy" names="your books" />
       
 


        </div>
         <div className='userInfo'>
            <div className="imageSimple">
            <div className="BookNameAndPriceImg">
            <div className='BookImg' onMouseEnter={ShowToBigBookImg}><img src={BookImage} alt="" /></div>
            <div className="namePrice">
                <div className='bookName'><span>your Choges Book name: </span>{names}</div>
                <div className='BookPrice'><span>Book Price:</span> {price} TK</div>
            </div>
        </div>
            </div>
            <form action="index.php" method="post">
            <table>
                <tr>
                    <td>Your Name:</td>
                </tr>
                <tr>
                <td style={height}><input onChange={username} name='name' type="name"  required/></td>
                </tr>

                <tr>
                    <td>Your country Name:</td>                
                </tr>

                <tr>                   
                    <td style={height} ><input onChange={userCountry} name='cuntry' type="name" required /></td>
                </tr>

                <tr>
                    <td>Your city Name:</td>                   
                </tr>

                <tr>
                    <td style={height}><input onChange={userCity} type="name"required /></td>
                </tr>

                <tr>
                    <td  >Your vallge Name:</td>               
                </tr>

                <tr>             
                    <td style={height} ><input onChange={userVallge} type="name" required /></td>
                </tr>

                <tr>
                    <td  >Your phone Name:</td>               
                </tr>

                <tr>           
                    <td style={height}><input onChange={userPhone} type="phone" required /></td>
                </tr>
                
                <tr>
                    <td>Your gmail Name:</td>
                </tr>

                <tr>                    
                    <td style={height}><input onChange={userEmail} type="email" required /></td>
                </tr>
                
                <tr>  
                  <td> <button   onMouseOver={submitBtn} id='submitBtn' > <span className='spanOrder' style={{color:"white"}}>Order</span> 

                  <Link className='condition disboald'  state={{userName:usernamedata}} to="/../appsComponent/allValue/EbookComponents/ConfromOrder"> Order </Link>
                  
                  </button></td>
                </tr>
                
                
            </table>
 </form>


        </div>
        <div className="bookShow control">
    <div className="close" onClick={RemoveBook}><span className='leftClose'></span> <span className='rightClose'></span></div>
    <div className="bookimgName ">
    <img src={BookImage} alt="" />
    </div>
 </div>
       </div>
    );
};

export default BookOrder;