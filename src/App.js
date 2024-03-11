
import './App.css';
import Header from "./component/Header"
import Content from './component/Content';
import Footer from './component/Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produse from './component/Produse';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Content />} />
     <Route path="/Produse" element={<Produse />} />
     <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
