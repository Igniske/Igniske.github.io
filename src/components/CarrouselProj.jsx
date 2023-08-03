import React from "react";
import { useState, useEffect, useRef } from "react";

function CarrouselProj( {children: projects, lang, descEspProj, descEngProj}){
    const [curr, setCurr] = useState(0)
    const intervalRef = useRef();
    const prev = () => setCurr((curr) => (curr === 0 ? projects.length - 1 : curr - 1 ))
    const next = () => setCurr((curr) => (curr === projects.length - 1 ? 0 : curr + 1))
    const nombreProj = ["Landing page", "Calculadora", "Simulador de dados", "Piedra, Papel o Tijera", "Contador Pomodoro", "Simulador de bateria", "Aplicacion de Quiz"]
    const nameProj = ["Landing page", "Calculator", "Dice Simulator", "Rock, Paper & Scissors", "25 + 5 Clock", "Drumkit Simulator", "Quiz App" ]
   
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            next();
        }, 7000);
    
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const link =[
        "https://igniske.github.io/parada/",
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
            <div className="flex w-full justify-center lg:justify-evenly">
                <button className="w-1/12 bg-white text-gray-700 hover:bg-stone-400 h-fit rounded-full lg:m-auto my-auto ml-6 flex items-center justify-center" onClick={prev}>
                    <div className="lg:text-6xl md:text-2xl text-xl pb-1 md:p-3 text-center font-black">{"<<"}</div>
                </button>
                <div className="flex flex-row lg:space-x-16 md:space-x-8 ml-4 justify-evenly">
                    <div>
                        <a href={link[curr]} className="flex flex-wrap flex-row h-96 md:h-fit w-5/6 lg:w-64 bg-gray-500 rounded-xl border-4 border-yellow-300">
                            <div className="w-1/2 h-3/6 pt-8 overflow-hidden relative mx-auto ">
                                <div className="flex lg:pt-0 pt-8 md:pb-12 transition-transform ease out duration-500" style={{ transform: `translateX(-${curr * 100}%)`}}>
                                    {projects}
                                </div>
                            </div>
                            <div className="h-3/6 w-full md:pb-4 mx-auto">
                                <h3 className="lg:h-1/2 w-full lg:text-xl font-semibold text-blue-50 text-center lg:pt-4 border-t-4 border-yellow-400 mx-auto">{lang ? nombreProj[curr] : nameProj[curr]}</h3>
                                <p className="lg:h-32 w-full lg:text-base text-sm text-center text-blue-100 mx-auto">{(lang ? descEspProj[curr] : descEngProj[curr])}</p>
                            </div>
                        </a>
                    </div>
                    <div>
                    <a href={curr === projects.length - 1 ? link[0] : link[curr + 1]} className="flex flex-wrap flex-row  h-96 md:h-fit  w-5/6 lg:w-64 bg-gray-500 rounded-xl border-4 border-yellow-300">
                        <div className="w-1/2 h-3/6 pt-8 overflow-hidden relative mx-auto">
                            <div className="flex transition-transform lg:pt-0 pt-8 md:pb-12  ease out duration-500" style={{ transform: `translateX(-${(curr === projects.length - 1 ? 0 : curr + 1) * 100}%)`}}>
                            
                            {projects}
                            
                            </div>
                            
                        </div>
                        <div className="h-3/6 w-full md:pb-4 mx-auto">
                            <h3 className="lg:h-1/2 w-full lg:text-xl text-center font-semibold text-blue-50 lg:pt-4 border-t-4 border-yellow-400 mx-auto">{curr === projects.length - 1 ? (lang ? nombreProj[0] : nameProj[0]) : (lang ? nombreProj[curr + 1] : nameProj[curr + 1])}</h3>
                            <p className="lg:h-32 w-full lg:text-base text-sm text-center text-blue-100 mx-auto">{curr === projects.length - 1 ? (lang ? descEspProj[0] : descEngProj[0]) : (lang ? descEspProj[curr + 1] : descEngProj[curr + 1])}</p>
                        </div>
                    </a>
                    </div>
                    </div>
                    <button className="w-1/12 bg-white text-gray-700 hover:bg-stone-400 h-fit rounded-full lg:m-auto my-auto mr-6 flex items-center justify-center" onClick={next}>
                        <div className="lg:text-6xl md:text-2xl text-xl pb-1 md:p-3 text-center font-black">{">>"}</div>
                    </button>
            </div>
    </div>
    )
}

export default CarrouselProj;