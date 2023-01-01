import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurServices from "./Components/OurServices/OurServices";
import OurCustomer from "./Components/OurCustomer/OurCustomer";
import Ariticles from "./Components/Ariticles/Ariticles";
import Gallary from "./Components/Gallary/Gallary";
import FeedBack from "./Components/FeedBack/FeedBack";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
function scrollTop() {
  window.scrollTo(0,0) ; 
}
function App() {
  useEffect(()=>{
    window.scrollTo(0,0) ; 
  },[])
  return (
    <div className="App" dir="rtl">
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <OurCustomer />
      <Ariticles />
      <Gallary />
      <FeedBack />
      <Footer />
      <div className="fixed left-[1rem] bottom-[1rem] w-[3rem] h-[3rem] rounded bg-gray-200 z-[10] transation-all duration-[.2s] translate-y-[0] hover:translate-y-[-.5rem] cursor-pointer" onClick={scrollTop} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
        </svg>
      </div>
    </div>
  );
}

export default App;
