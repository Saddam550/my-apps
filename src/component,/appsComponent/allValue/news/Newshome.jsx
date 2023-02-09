import React, { Component } from 'react';
import '../../../../boostrop/bootstrap.min.css';
import Post from '../../Post';
import NewsItem from './NewsItem';

class Newshome extends Component {


        constructor(props) {
            super(props)
            this.state={
                data:[],
                loading:true,
                catagory:'business',
                country:'in'
               
            }
        }

        
    // ${this.catagroy} ===========================================================================================
     catagroyhendle= async (e)=>{      
        let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.catagory}&apiKey=dcebfde7186f4bd5a506c173f4fe4446`;
        let data = await fetch(URL);
        let parseData = await data.json()
       
   this.setState({
    data:parseData.articles,
    loading:false,
    catagory:e.target.value
  })
        }
        countryhendle = async (e)=>{      
        let URL = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.catagory}&apiKey=dcebfde7186f4bd5a506c173f4fe4446`;
        let data = await fetch(URL);
        let parseData = await data.json()
       
   this.setState({
    data:parseData.articles,
    loading:false,
    country:e.target.value
  })
        }




    async componentDidMount(){
        let URL = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.catagory}&apiKey=dcebfde7186f4bd5a506c173f4fe4446`;
        let data = await fetch(URL);
        let parseData = await data.json()
   this.setState({
    data:parseData.articles,
    loading:false
  })
    } 
// ======================================================================================================
    

// click(){
// console.log(this.catagroy)
// }
    render() {
        return (

            
            <>
          <div className="container">
            <div className="row">
                <div className="col-md-3">  <form action="" method="get">
             <select  className="form-select" aria-label="Default select example" onChange={this.catagroyhendle}>
                <option value="">Catagorys</option>
                <option value="business">business</option>
                <option value="entertainment">entertainment</option>
                <option value="general">general</option>
                <option value="health">health</option>
                <option value="science">science</option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
                </select> 
                {/* <button onClick={this.click}>Click</button>     */}
            </form></div>
                <div className="col-md-3">

                    <form action="" method="post">
                    <select  className="form-select" aria-label="Default select example" onChange={this.countryhendle}>
                <option value="">country</option>
                <option value="bg">bg</option>
                <option value="in">in</option>
                <option value="us">us</option>
                <option value="cz">cz</option>
                <option value="no">no</option>
                <option value="ch">ch</option>
                <option value="ua">ua</option>
                <option value="ar">ar</option>
                <option value="tw">tw</option>
                <option value="sg">sg</option>
                <option value="ae">ae</option>
                </select> 

                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
          </div>


        
{/* <Post/> <h1 className='networkLoading'>loading...</h1>*/}
          {this.state.loading?(<Post/>):(
             <div className="container">
                <div className="row">
               
                   {this.state.data.map((newsItem)=>
                    <div className="col-md-3 my-2 customClass" key={newsItem.url}>
                         <NewsItem title={newsItem.title} description={newsItem.description} imageUrl={newsItem.urlToImage} newUrl={newsItem.url}/>
                    </div>
                   )}

               
                  
                </div>               
            </div>

)}
            
           
       
            </>
        );
    }
}

export default Newshome;