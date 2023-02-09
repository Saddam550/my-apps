import React from 'react'
import delevaryImg from "../pic/secstionThere.jpg"

export default function SectionThere() {
    const delevary= {
        color:"skyblue"
    }
  return (
    <div className='sectionThere' id='Delevary'>
        <div className="imageArea">
            <img src={delevaryImg} alt="delevaryImg" />
        </div>

        <div className="delevaryArea">
            <div className="delevaryTitle"> <span style={delevary}>delevary</span> Servises</div>
            <div className="delevaryDcs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam quas aspernatur perferendis voluptates repudiandae debitis esse assumenda ducimus
            </div>
            <div className="delevarylist">
                <ul>
                    <li>debitis esse assumenda ducimus</li>
                    <li>Earum veniam quas aspernatur </li>
                    <li>consectetur adipisicing elit.</li>
                </ul>
            </div>
            <button className="aboutBtn">Read more...</button>

        </div>

        <div className="fromArea">
           
            <div className="inputBox">
                 <p style={delevary}>Plaese Fil the delevary from</p>
                <form action="" method="post">
                <table>
                    <tr>
                        <td><input type="name"  placeholder='Your Name...' pattern='a-z'/></td>
                    </tr>
                   <tr>
                        <td><input type="name"  placeholder='Phone Number...' pattern='a-z'/></td>
                    </tr>
                    <tr>
                        <td><input type="name"  placeholder='city Name...' pattern='a-z'/></td>
                    </tr>
                    <tr>
                        <td><button className="aboutBtn">order</button></td>
                    </tr>
                </table>
                </form>
            </div>
        </div>
    </div>
  )
}
