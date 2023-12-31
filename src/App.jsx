import { React, useState } from 'react';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Article from './Components/Article';

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Portfolio/>
      <Article/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App