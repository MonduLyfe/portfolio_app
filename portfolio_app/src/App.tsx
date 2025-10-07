import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Navbar/Home';
import Footer from './components/Navbar/Footer';
import Resume from './components/Navbar/Resume';
import Projects from './components/Navbar/Projects';
import Contact from './components/Navbar/Contact';
import videoBG from './images/greenTechVid.mp4';
import About from './components/Navbar/About';

function App() {
  return (
    <div className="App" >

      <video src={videoBG} autoPlay loop muted></video>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
