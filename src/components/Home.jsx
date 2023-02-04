import React from "react";
import Github from "../media/icons/github.png"
import LinkedIn from "../media/icons/linkedin.png"
import Profile from "../media/icons/Profile.png"


function Home( {lang}){

    return(
        <section className="h-fit" id="intro">
            <div className="h-screen w-full bg-gray-700 flex ">
                <div className="lg:flex lg:flex-nowrap lg:flex-row w-5/6 h-5/6 lg:pt-12 mt-16 mx-auto">
                    <div className="flex w-full lg:w-1/2 h-1/2 lg:h-full justify-center">
                        <div className="bg-gradient-to-tr from-yellow-400 to-yellow-300 rounded-xl mt-6 lg:mr-32 md:mt-8 lg:mt-16 h-4/6 w-5/6 lg:h-3/5 lg:w-4/5 md:h-44 md:w-2/3 shake-manual transition transform -rotate-6">
                          <div className="h-full w-full flex justify-center items-center transition transform rotate-6">
                            <img className="lg:h-3/4 lg:w-2/4 md:h-36 md:w-36 h-4/6 w-3/6 rounded-lg border-8" src={Profile}/>
                          </div>
                        </div>
                      </div>
                    <div className="flex my-auto pt-16 -mt-24 md:mt-0 lg:-mt-4 w-full lg:w-1/2 h-1/2 lg:h-fit">
                        <div className="my-auto text-blue-100 font-sans lg:pb-12 space-y-1">
                            <p className="block font-light text-2xl mt-0">{lang ? "Bienvenido! Soy" : "Welcome! I'm"}</p>
                            <p className="block text-white font-semibold text-2xl mt-0">Ignacio Correa</p>
                            <p className="block text-xl mt-0">{lang ? "Desarrolador web, Desarrollador React" : "Web developer, React developer"}</p>
                            <p className="block text-lg mt-0">{lang ? "Autodidacta y tenaz que busca desarrollarse profesionalmente en el mundo de la tecnologia, ejerciendo mis habilidades actuales y ganando experiencia en mis campos de interés." : "A self-learning and tenacious person who seeks to develop professionally in the world of Information Technology, excercising my actual skills and earning experience in my fields of interest."}</p>
                            <div className="flex space-x-4">
                                <img className="h-8 w-8 mt-4" src={Github}/>
                                <img className="h-8 w-8 mt-4" src={LinkedIn}/>
                                
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Home;