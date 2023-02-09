import ClientImages from '../pic/shirin.jpg';
import UserClient from './UserClient';

const slilerBTN =  document.querySelectorAll(".upDownBTN")

let sliderIndex = 1
const priveBtn = () =>{
    alert(slilerBTN.length)
    const active =  document.querySelector(".active")
    active.classList.remove("active")
    sliderIndex++
 
 
    if (sliderIndex > slilerBTN.length) {         
        slilerBTN[0].classList.add("active")
        sliderIndex =1

        console.log(slilerBTN.length)


    }else{
        active.nextElementSibling.classList.add("active")
        console.log(slilerBTN.length)
    }
  
}


const nextBtn = () =>{
    const active =  document.querySelector(".active")
    active.classList.remove("active")
    sliderIndex--
    console.log(sliderIndex)
   

 
    if (sliderIndex > slilerBTN.length) {         
        slilerBTN[0].classList.add("active")
        sliderIndex =1



    }else{
        active.privElementSibling.classList.add("active")

    }  
}

const FiveSection = () => {
    return (
        <div className='ClientBox'>
                 <div className="clinetArea">
                 <div className="priveBtn" onClick={priveBtn}>◀</div>

                             <div className="upDownBTN active" >
                                  <UserClient ClientImg={ClientImages} ClientName="Shirin" clientBIO="Designers" ClintDES="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Dicta Quam Perspiciatis Aut, Consequatur Unde? Iure Tenetur Doloribus Distinctio Aliquam Mollitia, Quis Quam Velit Incidunt Voluptates Similique Perferendis, Quidem Officia!"/>
                                  </div>

                             <div className="upDownBTN " >  <UserClient ClientImg={ClientImages} ClientName="Saddam" clientBIO="Web Developer" ClintDES="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Dicta Quam Perspiciatis Aut, Consequatur Unde? Iure Tenetur Doloribus Distinctio Aliquam Mollitia, Quis Quam Velit Incidunt Voluptates Similique Perferendis, Quidem Officia!"/>
                             </div>
                             
                             <div className="upDownBTN " > <UserClient ClientImg={ClientImages} ClientName="Hossen" clientBIO="marketer" ClintDES="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Dicta Quam Perspiciatis Aut, Consequatur Unde? Iure Tenetur Doloribus Distinctio Aliquam Mollitia, Quis Quam Velit Incidunt Voluptates Similique Perferendis, Quidem Officia!"/>
                             </div>


                             <div className="upDownBTN " > <UserClient ClientImg={ClientImages} ClientName="Arif" clientBIO="marketer" ClintDES="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Dicta Quam Perspiciatis Aut, Consequatur Unde? Iure Tenetur Doloribus Distinctio Aliquam Mollitia, Quis Quam Velit Incidunt Voluptates Similique Perferendis, Quidem Officia!"/>
                             </div>


                             <div className="upDownBTN " > <UserClient ClientImg={ClientImages} ClientName="Rakib" clientBIO="marketer" ClintDES="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Dicta Quam Perspiciatis Aut, Consequatur Unde? Iure Tenetur Doloribus Distinctio Aliquam Mollitia, Quis Quam Velit Incidunt Voluptates Similique Perferendis, Quidem Officia!"/>
                             </div>


                             <div className="upDownBTN " > <UserClient ClientImg={ClientImages} ClientName="Hasan" clientBIO="marketer" ClintDES="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Rem Dicta Quam Perspiciatis Aut, Consequatur Unde? Iure Tenetur Doloribus Distinctio Aliquam Mollitia, Quis Quam Velit Incidunt Voluptates Similique Perferendis, Quidem Officia!"/>
                             </div>
                <div className="nextBtn" onClick={nextBtn}>▶</div>
                 </div>
                <button className="aboutBtn"  >Client</button>
                
            
            
        </div>
    );
};

export default FiveSection;