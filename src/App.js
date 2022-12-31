import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import OurServices from "./Components/OurServices/OurServices";
import OurCustomer from "./Components/OurCustomer/OurCustomer";
import Ariticles from "./Components/Ariticles/Ariticles";
import Gallary from "./Components/Gallary/Gallary";
import FeedBack from "./Components/FeedBack/FeedBack";
import Footer from "./Components/Footer/Footer";
function App() {
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
    </div>
  );
}

export default App;
