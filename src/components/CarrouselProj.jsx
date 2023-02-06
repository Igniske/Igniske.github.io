import React from "react";
import { useState, useEffect, useRef } from "react";

function CarrouselProj( {children: projects, lang, descEspProj, descEngProj}){
    const [curr, setCurr] = useState(0)
    const intervalRef = useRef();
    const prev = () => setCurr((curr) => (curr === 0 ? projects.length - 1 : curr - 1 ))
    const next = () => setCurr((curr) => (curr === projects.length - 1 ? 0 : curr + 1))
    const nombreProj = ["Tateti", "Calculadora", "Simulador de dados", "Piedra, Papel o Tijera", "Contador Pomodoro", "Simulador de bateria", "Aplicacion de Quiz"]
    const nameProj = ["TicTacToe", "Calculator", "Dice Simulator", "Rock, Paper & Scissors", "25 + 5 Clock", "Drumkit Simulator", "Quiz App" ]
   
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            next();
        }, 7000);
    
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const link =[
        "https://codepen.io/Igniske/full/GRGpbwx",
        "https://codepen.io/Igniske/full/dyKVaZw",
        "https://codepen.io/Igniske/full/ZERyrqm",
        "https://codepen.io/Igniske/full/dyKomwm",
        "https://codepen.io/Igniske/full/zYaEeBE",
        "https://codepen.io/Igniske/full/xxzVpYq",
        "https://codepen.io/Igniske/full/dyjRLKo"
      ]

    return (
        <div className="bg-gray-700 w-full h-min">
            <h3 className="lg:text-5xl text-4xl font-bold text-white lg:py-16 py-8 text-center">{lang ? "Mis proyectos" : "My projects"}</h3>
        <div className="flex w-full justify-center lg:justify-evenly space-x-4">
        <button className="w-1/12 border-2 border-black bg-gray-300 hover:bg-stone-400 lg:h-28 md:h-16 h-12 rounded-full my-auto flex items-center justify-center" onClick={prev}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ height: '100%' }}>
  <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
  <path d="M0-.25h24v24H0z" fill="none"/>
</svg>
</button>
            <a href={link[curr]} className="flex flex-wrap flex-row h-96 md:h-fit w-5/12 lg:w-64 bg-gray-500 rounded-xl border-4 border-yellow-300">
                <div className="w-1/2 h-3/6 pt-8 overflow-hidden relative mx-auto ">
                    <div className="flex lg:pt-0 pt-8 md:pb-12 transition-transform ease out duration-500" style={{ transform: `translateX(-${curr * 100}%)`}}>
                    
                    {projects}
                    
                    </div>
                    
                </div>
                <div className="h-3/6 w-full md:pb-4 mx-auto">
                        <h3 className="lg:h-1/2 w-full text-xl font-semibold text-blue-50 text-center lg:pt-4 border-t-4 border-yellow-400 mx-auto">{lang ? nombreProj[curr] : nameProj[curr]}</h3>
                        <p className="lg:h-1/2 w-full text-center text-blue-100 mx-auto">{(lang ? descEspProj[curr] : descEngProj[curr])}</p>
                        
                    </div>
            </a>
            <a href={curr === projects.length - 1 ? link[0] : link[curr + 1]} className="flex flex-wrap flex-row  h-96 md:h-fit  w-5/12 lg:w-64 bg-gray-500 rounded-xl border-4 border-yellow-300">
                <div className="w-1/2 h-3/6 pt-8 overflow-hidden relative mx-auto">
                    <div className="flex transition-transform lg:pt-0 pt-8 md:pb-12  ease out duration-500" style={{ transform: `translateX(-${(curr === projects.length - 1 ? 0 : curr + 1) * 100}%)`}}>
                    
                    {projects}
                    
                    </div>
                    
                </div>
                <div className="h-3/6 w-full md:pb-4 mx-auto">
                        <h3 className="lg:h-1/2 w-full text-center text-xl font-semibold text-blue-50 lg:pt-4 border-t-4 border-yellow-400 mx-auto">{curr === projects.length - 1 ? (lang ? nombreProj[0] : nameProj[0]) : (lang ? nombreProj[curr + 1] : nameProj[curr + 1])}</h3>
                        <p className="lg:h-1/2 w-full text-center text-blue-100 mx-auto">{curr === projects.length - 1 ? (lang ? descEspProj[0] : descEngProj[0]) : (lang ? descEspProj[curr + 1] : descEngProj[curr + 1])}</p>
                    </div>
            </a>
            <button className="w-1/12 border-2 border-black bg-gray-300 hover:bg-stone-400 lg:h-28 md:h-16 h-12 rounded-full m-auto flex items-center justify-center" onClick={next}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ height: '100%' }}>
  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
  <path d="M0-.25h24v24H0z" fill="none"/>
</svg>
</button>
        </div>
    </div>
    )
}

export default CarrouselProj;