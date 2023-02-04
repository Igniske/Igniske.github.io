import React from "react";
import Logo from '../media/icons/LogoPort.png'
import AR from '../media/icons/AR.png'
import US from '../media/icons/US.png'

function Navbar( {lang, setLang}){

    const langSwitch = ()=> {setLang(lang => !lang)}

    return(<div>
        <nav className="flex bg-gray-700 h-16 text-white w-full fixed  z-10">
        <div className="flex w-1/2 lg:w-1/3 justify-start my-auto ml-4">
            <img src={Logo} className="w-12 h-12 rounded-full" />
        </div>
        <div className="lg:flex lg:w-1/3 text-xl font-light hidden lg:opacity-100 md:opacity-100 w-0 bottom-4 m-auto">
            <a href="" className="w-min mx-auto hover:underline scale-manual ">{lang ? "Inicio" : "Home"}</a>
            <a href="" className="w-min mx-auto hover:underline scale-manual">{lang ? "Habilidades" : "Skills"}</a>
            <a href="" className="w-min mx-auto hover:underline scale-manual">{lang ? "Proyectos" : "Projects"}</a>
            <a href="" className="w-min mx-auto hover:underline scale-manual">{lang ? "Certificados" : "Certifications"}</a>
        </div>
        <div className="flex w-1/2 lg:w-1/3 justify-end my-auto">
            <button className="bg-blue-900 flex w-fit p-2 rounded-full border-2 border-blue-600  mr-4" onClick={langSwitch}>{(lang ? "Español" : "English")} <img src={lang ? AR : US} className="mx-4 lg:mx-2 md:mx-2 my-auto h-5 w-5"/></button>
            <a className="bg-green-400 w-min p-2 rounded-full border-2 cursor-pointer border-green-700 mr-4">{lang ? "Curriculum" : "Resume"}</a>
        </div>
    </nav>
    </div>

    )
}

export default Navbar;