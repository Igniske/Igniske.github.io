
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import CarrouselSkills from './components/CarrouselSkills';
import { useState } from 'react';

import TypeScript from './media/skills/typescript.png'
import ReactIcon from './media/skills/react.svg'
import Psql from './media/skills/psql.svg'
import Tailwind from './media/skills/tailwind.svg'
import GitIcon from './media/skills/git.png'
import Js from './media/skills/js.svg'
import HtmlIcon from './media/skills/html.svg'
import CssIcon from './media/skills/css.svg'
import Bootstrap from './media/skills/bootstrap.svg'
import NodeJs from './media/skills/nodejs.svg'
import Bash from './media/skills/bash.svg'
import Mongo from './media/skills/Mongo.svg'

import CarrouselProj from './components/CarrouselProj';
import Tateti from './media/proyect-icons/tateti.svg'
import Calculadora from './media/proyect-icons/calculadora.png'
import Dice from './media/proyect-icons/dice.png'
import Ppt from './media/proyect-icons/ppt.png'
import Timer from './media/proyect-icons/timer.svg'
import Drumkit from './media/proyect-icons/drumkit.png'
import Quiz from './media/proyect-icons/quiz.png'


function App() {

    const [lang, setLang] = useState(true)
    const descEsp = ["Mas de 1 año de experiencia", "Mas de 1 año de experiencia", "Mas de 1 año de experiencia", "Mas de 1 año de experiencia", "Menos de 1 año de experiencia", "Menos de 1 año de experiencia", "Menos de 1 año de experiencia", "Menos de 1 año de experiencia", "Mas de 1 año de experiencia","Menos de 1 año de experiencia", "Mas de 1 año de experiencia","Menos de 1 año de experiencia"]
    const descEng = ["More than a year of experience", "More than a year of experience", "More than a year of experience", "More than a year of experience", "Less than a year of experience","Less than a year of experience","Less than a year of experience","Less than a year of experience", "More than a year of experience","Less than a year of experience", "More than a year of experience","Less than a year of experience"]
    const descEspProj = ["El juego de tic tac toe para dos personas.",
     "Calculadora no cientifica creada con Javascript",
    "Puedes lanzar cierta cantidad de dados e inclusive alterar su valor.",
    "En este juego podrás hacer elecciones contra el programa.",
    "Un contador de pomodoro con tiempos intercambiables.",
    "Un simulador de una bateria que emite audios segun las teclas presionadas",
    "En esta app puedes contestar un preguntas sobre desarrollo front end."]

    const descEngProj = ["The classic game Tic, tac, toe for two persons",
     "A non-cientific calculator made with Javascript",
    'You can roll any number of dices, and even change their values',
    "In this game you can play against the IA",
    "A 25+5 clock with interchangeable timers",
    "A drum-kit simulator that plays audio based on the pressed keys",
    "In this app you can answer a quiz about front-end development"
  ]
     const slides = [HtmlIcon, CssIcon, Js, Bootstrap, Tailwind, ReactIcon, NodeJs, TypeScript, Bash, Psql, GitIcon, Mongo]
     const projects = [Tateti, Calculadora, Dice, Ppt, Timer, Drumkit, Quiz]
    
  return (
    <div className="App">
      <Navbar lang={lang} setLang={setLang}></Navbar>

      <Home lang={lang}></Home>

      <CarrouselSkills lang={lang} descEng={descEng} descEsp={descEsp}>
      {slides.map((s, i) => ( <img src={s} alt={"Skill " + i} key={"index" + i} />))}
      </CarrouselSkills>

      <CarrouselProj lang={lang} descEngProj={descEngProj} descEspProj={descEspProj}>
      {projects.map((s, i) => ( <img src={s} alt={"Project " + i} key={"index proj" + i} />))}
      </CarrouselProj>

      <Certifications lang={lang}></Certifications>

      <Footer lang={lang}></Footer>
    </div>
  );
}

export default App;
