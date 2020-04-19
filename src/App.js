import React from 'react';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Welcome from './components/welcome';
import ProgrammingLang from './components/programmingLang';
import AboutUs from './components/aboutUs';
import FixedImageBG from './components/fixedImageBG';
import CoureselSlide from './components/carouselSlide';
import MeetTheTeam from './components/meetTheTeam';
import Cards from './components/cards';
import ConnectWithUs from './components/connectWithUs';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <CoureselSlide />
      <Jumbotron />
      <Welcome />
      <ProgrammingLang />
      <AboutUs />
      <FixedImageBG />
      <MeetTheTeam />
      <Cards />
      <ConnectWithUs />
      <Footer />
    </div>
  );
}

export default App;
