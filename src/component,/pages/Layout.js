import { Link, Outlet } from "react-router-dom";
// import Post from ''

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="naverUl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pdf">PDF Generator</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/home">Text Convartor</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
        
          </li>
          <li className="drop"> All Apps
          <ul className="AllApps">
          <li> <Link to="/../appsComponent/BlurryLoading">  BlurryLoading</Link></li>
          <li> <Link to="/../appsComponent/Calculator"> Calculator</Link></li>
          <li> <Link to="/../appsComponent/ChatApps"> ChatApps </Link></li>
          <li> <Link to="/../appsComponent/ChessGame"> ChessGame </Link></li>
          <li> <Link to="/../appsComponent/ColorPikker"> ColorPikker </Link></li>
          <li> <Link to="/../appsComponent/DrinkWater"> DrinkWater</Link></li>
          <li> <Link to="/../appsComponent/EbookSite">EbookSite </Link></li>
          <li> <Link to="/../appsComponent/FacebookClone">FacebookClone </Link></li>
          <li> <Link to="/../appsComponent/FoodOrder">FoodOrder </Link></li>
          <li> <Link to="/../appsComponent/FQACollapse">FQACollapse </Link></li>

        <li className="DropTwo"> StepTwo
        <ul className="TwoStep">
         <li> <Link to="/../appsComponent/HoverBroard"> HoverBroard</Link></li>
          <li> <Link to="/../appsComponent/ImageCarousel">imageCarousel</Link></li>
          <li> <Link to="/../appsComponent/ImageFeed"> imageFeed</Link></li>
          <li> <Link to="/../appsComponent/MovieApp"> MovieApp</Link></li>
          <li> <Link to="/../appsComponent/NodeApps"> NodeApps</Link></li>
          <li> <Link to="/../appsComponent/PasswordCan">PasswordCan</Link></li>
          <li> <Link to="/../appsComponent/Pokedok">pokedok</Link></li>
          <li> <Link to="/../appsComponent/QuizApps">QuizApps</Link></li>
          <li> <Link to="/../appsComponent/RangeSlider">RangeSlider</Link></li>
          <li> <Link to="/../appsComponent/ScrollAnimation">ScrollAnimation</Link></li>
          <li> <Link to="/../appsComponent/SoundBoard">SoundBoard</Link></li>
          <li> <Link to="/../appsComponent/StickyNavber">StickyNavber</Link></li>
          <li> <Link to="/../appsComponent/StopWatch">StopWatch</Link></li>
          <li> <Link to="/../appsComponent/ThemeClock">themeClock</Link></li>
          <li> <Link to="/../appsComponent/ToastNotifcation">ToastNotifcation</Link></li>
          <li> <Link to="/../appsComponent/allValue/EbookComponents/BookOrder">book order</Link></li>
          <li> <Link to="/../appsComponent/Post">search</Link></li>
         </ul>
          
        </li>
          </ul>
         </li>
          <li>
            <Link to="../../froms/from">Froms</Link>
        
          </li>
          <li>
            <Link to="/">QR Generator</Link>
        
          </li>




        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;