
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ComNames from '../DrinkComponetns/ComNames';
import englishBookTwo from '../pic/8-600x600.jpg';
import banglaBookOne from '../pic/d.png';
import englishBookOne from '../pic/news-2.jpg';
import mathOne from '../pic/prev1.jpg';
import mathTwo from '../pic/prev2.jpg';
import banglaBookTwo from '../pic/shop-2.jpg';
import BookCom from './BookCom';
const EbookAllBook = () => {

    const book ={
        bookimgs:[
           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },

           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },

           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },

           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },

           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },

           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },

           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },
           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },
           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },
           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },
           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },
           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },
           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },
           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },
           {
            id:1,
            bookImg:banglaBookOne,
            bookName:"bangla",
            bookPrice:"456"
           },
           
           {
            id:1,
            bookImg:banglaBookTwo,
            bookName:"bangla Two",
            bookPrice:"788"
           },
           
           {
            id:1,
            bookImg:englishBookOne,
            bookName:"english",
            bookPrice:"786"
           },
           {
            id:1,
            bookImg:englishBookTwo,
            bookName:"english 2",
            bookPrice:"456"
           },
           {
            id:1,
            bookImg:mathOne,
            bookName:"math",
            bookPrice:"123"
           },
           {
            id:1,
            bookImg:mathTwo,
            bookName:"hadis 1",
            bookPrice:"546"
           },
           
        
        ]
    }
const [bookstat, setbookstat] = useState(12)

    const seeBook=()=>{
        setbookstat(bookstat+20)
    }
    let seeb =  book.bookimgs.slice(0,bookstat)
    
    //============================= start
    // search function 
    //===================
// const searchF = (evan)=>{
//     const [searchData, setsearchData] = useState('')
// const searchValue = evan.target.value
// setsearchData(searchValue);


// }

// let dataSearch = book.bookimgs.filter(item=>{
//     return Object.keys(item).some(key=>
//         item[key]).toString().toLowrcase().includes(filter.toString().toLowrcase())
// })
    //=============================end

    return (
        <div className='bookCompoment'>
            <ComNames nameTitle="academy books" names="all Books"/>
    
           
                {/* <div className="bookSearch">
                    <span>Search</span>
                    <input type="text" onChange={searchF} />
                </div> */}
            <div className='flaxBook'>
               
               {
                seeb.map((item, index) =>(
                    // book name and book price pass to order page = state={{names:item.bookName , price:item.bookPrice}} 


            <Link key={index} state={{names:item.bookName , price:item.bookPrice, BookImage:item.bookImg}} to="/../appsComponent/allValue/EbookComponents/BookOrder"><BookCom bookimg={item.bookImg} bookname={item.bookName} bookPrice={item.bookPrice} /></Link>

                        
                    )) 
                }
               
                </div>
            
            <button className="seeBook" onClick={seeBook}>See book</button>
        </div>
    );
};

export default EbookAllBook;