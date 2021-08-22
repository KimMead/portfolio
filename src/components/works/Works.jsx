import "./works.scss";
import { useState } from "react";
import { Person, Mail } from '@material-ui/icons';

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Quote Keeper",
            desc: "This app allows users to track their favorite quotes and sayings.",
            tech: "Ruby | Rails | JavaScript | React | Redux",
            demo: "https://youtu.be/Sb471JSOqy0",
            code: "https://github.com/KimMead/quotes-final-frontend",
            img: "https://media.giphy.com/media/RS4wXTCuKYFO3aOMIO/giphy.gif",
        },
        {
            id: "2",
            icon: "./assets/mobile.png",
            title: "Travel Tracker",
            desc: "A simple app that allows users to track attractions they have visited.",
            tech: "Ruby | Rails | JavaScript ",
            demo: "https://youtu.be/9kkNNXFaYIs",
            code: "https://github.com/KimMead/Rails_Project_Real_JS",
            img: "https://media.giphy.com/media/iiPjEKMEX1hGnZIs5G/giphy.gif",

        },
        {
            id: "3",
            icon: "./assets/mobile.png",
            title: "Movie List",
            desc: "A simple app that allows users to track movies and movie information.",
            tech: "Ruby | Sinatra | HTML ",
            demo: "https://youtu.be/4pacLV5G73I",
            code: "https://github.com/KimMead/movie-list",
            img: "https://media.giphy.com/media/N79imLqRYM07oTCpQN/giphy.gif",
        },
        
    ]

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    };

    return (
    <div className="works" id="works">
       <h1>Projects</h1>
      
        <div 
            className="slider" style={{transform:`translateX(-${currentSlide *100}vw)` }}>
            {data.map((d) => ( 
            <div className="container">
                
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.icon} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            <h4>STACK</h4>
                            <p>{d.tech}</p>
                            
                                
                                    <form action={d.code}>
                                    <button type="submit" class="source">Source Code</button>
                                    </form>
                                    <form action={d.demo}>
                                    <button type="submit" class="demo">Full Demo</button>
                                    </form>
                                    </div>
                                    
                               
                           
                            
                        </div>
                        <div className="right">
                        <img src={d.img} alt=""/>
                        </div>
                        
                    
                    </div>
                    
                    
                </div>
            ))}
        </div>
        <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        
    </div>
    );
}
