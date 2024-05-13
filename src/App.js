
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';

import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Education from './Components/Education/Education';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <About/>
      <Education/>
      <Services/>
      
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;