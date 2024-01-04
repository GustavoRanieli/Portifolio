import React from 'react';
import './App.css';
import Header from './Components/Header';
import UltimosTrabalhos from './Components/UltimosTrabalhos';
import Cursos from './Components/Cursos';
import ContacteMe from './Components/ContacteMe';
import Footer from './Components/Footer';
import Perfil from './Components/Perfil';
import Banner from './Components/Banner';


function App() {
  return (
    <>
      <Header />
      <Banner />
      <Perfil />
      <UltimosTrabalhos />
      <Cursos />
      <ContacteMe />
      <Footer />
    </>
  );
}

export default App;
