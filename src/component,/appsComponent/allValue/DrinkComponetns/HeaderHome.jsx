// import homeHeaderimg from '../pic/headers.jpg'
export default function HeaderHome() {
const spanStyle = { 
    color:"darkblue"
}
const spanOneStyle = { 
    color: "#201dcf30",
    textShadow: "0px 0px 0px #000da930"
    
}
 
 
    return(
        <>
          {/* <img src={homeHeaderimg} alt="" /> */}
 <div className="headers" id="Home">
    <div className="headerBg">
    <div className="headerTextArea">
    <div className="headerTitle"> <span style={spanOneStyle} > Minarel Woter</span> <br /> <span style={spanStyle}> For Evary Day</span> </div>
    <div className="headerPra"> This my minarel woter teems for evary dey. <br /> Thanks for you, by evaryting order now...</div>
    </div><br />
    <div className="headerBtnArea">
    <button className="headerOrderBtn">Orders</button>
    <button className="headerContactBtn">Contact</button>
    </div>
    </div>
     </div>

          
        </>
    )
}