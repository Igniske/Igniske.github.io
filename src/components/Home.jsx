import React from "react";
import Github from "../media/icons/github.png"
import LinkedIn from "../media/icons/linkedin.png"
import Profile from "../media/icons/Profile.png"


function Home( {lang}){

    return(
        <section className="h-fit" id="intro">
            <div className="h-screen w-full bg-gray-700 flex ">
                <div className="lg:flex lg:flex-nowrap lg:flex-row w-5/6 h-5/6 lg:pt-12 mt-8 mx-auto">
                    <div className="flex w-full lg:w-1/2 h-1/2 mb-8 lg:mt-8 lg:h-min-screen align-middle justify-center">
                        <div className="bg-gradient-to-tr from-yellow-400 to-yellow-300 border-4 border-yellow-600 rounded-xl mt-16 lg:mr-32 h-4/6 w-full lg:h-full lg:w-4/5 md:h-2/3 md:w-2/3 lg:mt-6 md:mt-40 transition transform -rotate-6">
                          <div className="h-full w-full flex justify-center items-center transition transform rotate-6">
                            <img className="lg:h-5/6 lg:w-2/5 md:h-3/4 md:w-3/5 h-4/5 w-1/2 rounded-lg border-yellow-300 border-4" src={Profile}/>
                          </div>
                        </div>
                      </div>
                    <div className="flex my-auto pt-16 -mt-24 md:mt-0 lg:-mt-4 w-full lg:w-1/2 h-1/2 lg:h-fit">
                        <div className="my-auto text-blue-100 font-sans lg:pb-12 space-y-1">
                            <p className="block font-light text-2xl mt-0">{lang ? "Bienvenido! Soy" : "Welcome! I'm"}</p>
                            <p className="block text-white font-semibold text-2xl mt-0">Ignacio Correa</p>
                            <p className="block text-xl mt-0">{lang ? "Desarrolador front-end, Desarrollador full-stack" : "Front end developer, Full stack developer"}</p>
                            <p className="block text-lg mt-0">{lang ? "Autodidacta y tenaz que busca desarrollarse profesionalmente en el mundo de la tecnologia, ejerciendo mis habilidades actuales y ganando experiencia en mis campos de interés." : "A self-learning and tenacious person who seeks to develop professionally in the world of Information Technology, excercising my actual skills and earning experience in my fields of interest."}</p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/Igniske">
                                    <img className="h-8 w-8 mt-4" src={Github}/>
                                </a>
                                <a href="https://www.linkedin.com/in/ignaciomanuelcorrea/">
                                    <img className="h-8 w-8 mt-4" src={LinkedIn}/>
                                </a>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Home;