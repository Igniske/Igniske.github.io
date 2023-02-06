
import { useState, useRef, useEffect } from "react";

function CarrouselSkills( {children: slides, lang, descEsp, descEng}){
    const [curr, setCurr] = useState(0)
    const intervalRef = useRef();
    const nombre = ["HTML5", "CSS3", "JavaScript", "Bootstrap","Tailwind", "React.Js", "Node.Js", "TypeScript", "Bash", "PSQL", "Git"]
    
    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1 ))
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            next();
        }, 7000);
    
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);
    

    return (
        <div className="bg-gray-700 w-full h-min">
            <h3 className="lg:text-5xl text-4xl font-bold text-white lg:pb-16 pb-8 text-center">{lang ? "Mis habilidades" : "My skills"}</h3>
            <div className="flex w-full justify-center lg:justify-evenly space-x-4">
            <button className="w-1/12 border-2 border-black bg-gray-300 hover:bg-stone-400 lg:h-28 md:h-16 h-12 rounded-full my-auto flex items-center justify-center" onClick={prev}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ height: '100%' }}>
  <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
  <path d="M0-.25h24v24H0z" fill="none"/>
</svg>

</button>

            <div className="flex flex-wrap flex-row lg:h-72 md:h-fit md:pb-8 h-60 w-5/12 lg:w-64 bg-gray-500 rounded-xl border-4 border-blue-600">
                <div className="w-1/2 lg:h-2/3 h-3/5 pt-8 overflow-hidden relative mx-auto">
                    <div className="flex transition-transform ease out duration-500" style={{ transform: `translateX(-${curr * 100}%)`}}>
                    
                    {slides}
                    
                    </div>
                    
                </div>
                <div className="lg:h-1/3 h-2/5 md:pt-4 w-full mx-auto">
                        <h3 className="lg:h-1/2 w-full text-xl font-semibold text-blue-50 text-center mb-1 lg:pt-4 mx-auto">{nombre[curr]}</h3>
                        <p className="lg:h-1/2 w-full text-center text-blue-100 mx-auto">{(lang ? descEsp[curr] : descEng[curr])}</p>
                        
                    </div>
            </div>
            <div className="flex flex-wrap flex-row lg:h-72 md:h-fit md:pb-8 h-60 w-5/12 lg:w-64 bg-gray-500 rounded-xl border-4 border-blue-600">
                <div className="w-1/2 lg:h-2/3 h-3/5 pt-8 overflow-hidden relative mx-auto">
                    <div className="flex transition-transform ease out duration-500" style={{ transform: `translateX(-${(curr === slides.length - 1 ? 0 : curr + 1) * 100}%)`}}>
                    
                    {slides}
                    
                    </div>
                    
                </div>
                <div className="lg:h-1/3 h-2/5 md:pt-4 w-full mx-auto">
                        <h3 className="lg:h-1/2 w-full text-center text-xl font-semibold mb-1 text-blue-50 lg:pt-4 mx-auto">{curr === slides.length - 1 ? nombre[0] : nombre[curr + 1]}</h3>
                        <p className="lg:h-1/2 w-full text-center text-blue-100 mx-auto">{curr === slides.length - 1 ? (lang ? descEsp[0] : descEng[0]) : (lang ? descEsp[curr + 1] : descEng[curr + 1])}</p>
                    </div>
            </div>
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

export default CarrouselSkills;