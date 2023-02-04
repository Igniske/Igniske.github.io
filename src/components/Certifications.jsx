import React from "react";
import Udemy1 from "../media/certs/Udemy1.jpg"
import Udemy2 from "../media/certs/Udemy2.jpg"
import Udemy3 from "../media/certs/Udemy3.jpg"
import Udemy4 from "../media/certs/Udemy4.jpg"
import FCC1 from "../media/certs/FCC1.PNG"
import FCC2 from "../media/certs/FCC2.PNG"
import FCC3 from "../media/certs/FCC3.PNG"
import FCC4 from "../media/certs/FCC4.PNG"

function Certifications( {lang} ){

    
    const certImg = [FCC1,
FCC2,
FCC3,
FCC4,
Udemy1,
Udemy2,
Udemy3,
Udemy4]
    const certDesc = ["FreeCodeCamp","FreeCodeCamp","FreeCodeCamp","FreeCodeCamp","Udemy","Udemy","Udemy","Udemy"]
    const certLink = ["https://www.freecodecamp.org/certification/Igniske/responsive-web-design",
    "https://www.freecodecamp.org/certification/Igniske/javascript-algorithms-and-data-structures",
  "https://www.freecodecamp.org/certification/Igniske/front-end-development-libraries",
  "https://www.freecodecamp.org/certification/Igniske/relational-database-v8",
  "https://www.udemy.com/certificate/UC-c5c8c133-456e-4df3-8458-fac71a16d62a/",
  "https://www.udemy.com/certificate/UC-91b1ec01-0ce2-4f6a-a23b-93fc66730a32/",
  "https://www.udemy.com/certificate/UC-788f7534-8599-4fe8-81ea-c1f9701c8301/",
  "https://www.udemy.com/certificate/UC-e2b97c1d-563a-4c03-88cd-760b694b30de/" ]
  
    const certEsp = ["Diseño web adaptable", 
    "Algoritmos y estructura de datos con JavaScript",
    "Desarrollo Front-end con librerias",
    "Bases de datos relacionales",
    "Curso de JavaScript de cero a heroe",
    "Consultas en SQL para principiantes",
    "Tailwind CSS en 1 hora: masteriza Tailwind CSS rapidamente",
    "Bootcamp de Git y Github para desarrolladores"  
  ]
  
  const certEng = ["Responsive web desing",
    "Javascript Algorithms and data structure",
    "Front-end development libraries",
    "Relation databases",
    "JavaScript from zero to hero",
    "SQL queries for beginners",
    "Tailwind CSS in 1 hour: Master Tailwind CSS Quickly",
    "Practical Git & Github Bootcamp for Developers"
  ]


    const mapCerts = ()=> certLink.map((val, i) => <a href={val} key={i + "index cert"} className="w-2/3 lg:w-1/3 rounded bg-gradient-to-r from-purple-900 to-blue-900 hover:from-blue-800 hover:to-purple-800 border-2 border-cyan-200  transition-colors duration-200 p-6 flex flex-col items-center m-8">
    <img src={certImg[i]} alt="Image" className="h-48 w-48 object-cover scale-manual rounded-lg border-2 border-black"/>
    <h2 className="text-xl mt-6 font-bold text-center text-white">{lang ? certEsp[i] : certEng[i]}</h2>
    <p className="text-gray-300 text-center mt-2">{lang ? "Emitido por " : "Issued by"} {certDesc[i]}</p>
  </a>)
  
    return(<div>
        <section id="certifications">
        <h3 className="lg:text-5xl text-4xl font-bold bg-gray-700 text-white lg:py-16 py-8 text-center">{lang ? "Mis certificaciones" : "My certifications"}</h3>
            <div className="flex flex-wrap flex-row bg-gray-700 h-min w-full justify-evenly">
                {mapCerts()}
            </div>
        </section>
    </div>
        
    )
}

export default Certifications;