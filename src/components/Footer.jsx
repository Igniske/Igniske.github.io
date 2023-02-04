import React from "react";

function Footer( {lang}){

    return(
        <div>
            <footer>
            <div className="flex bg-gray-700 w-full justify-center">
                <div className="flex flex-wrap flex-col justify-center w-5/6 bg-gray-500 h-min border-8 border-b-0 border-gray-800 rounded-t-3xl space-y-2">
                    <a href="#intro" className="w-min text-xl pt-4 mx-auto hover:text-white hover:scale-manual">{lang ? "Inicio" : "Home"}</a>
                    <a href="#skills" className="w-min text-xl mx-auto hover:text-white hover:scale-manual">{lang ? "Habilidades" : "Skills"}</a>
                    <a href="#projects" className="w-min text-xl mx-auto hover:text-white hover:scale-manual">{lang ? "Proyectos" : "Projects"}</a>
                    <a href="#certifications" className="w-min text-xl mx-auto hover:text-white hover:scale-manual">{lang ? "Certificados" : "Certifications"}</a>
                    <p className="text-center py-2">Copyright © 2023 Ignacio Correa. All Right Reserved.</p>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer;