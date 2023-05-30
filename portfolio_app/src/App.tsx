import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Navbar/Home';
import Footer from './components/Navbar/Footer';
import Resume from './components/Navbar/Resume';
import Projects from './components/Navbar/Projects';
import Contact from './components/Navbar/Contact';

function App() {
  return (
    <div className="App" >

      <div className="title">
        Victors Portfolio
      </div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
