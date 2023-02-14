import Navbar from "./Component/Navbar/Navbar";
import './App.css';
import Intro from "./Component/Introduction/Intro";
import Services from "./Component/Services/Services";
import Skills from "./Component/Skills/Skills";
import Slider from "./Component/Slider/Slider";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";



function App() {
  
  return (
    <div className="App"



    >
    <Navbar/>
    <Intro/>
    <Services/>
    <Slider/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
    
  );
}

export default App;
