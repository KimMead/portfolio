import "./works.scss";
import { useState } from "react";

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Travel Tracker",
            desc: "A simple app that allows users to track attractions they have visited.",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "./assets/mobile.png",
            title: "Movie List",
            desc: "A simple app that allows users to track movies and movie information.",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "3",
            icon: "./assets/mobile.png",
            title: "Quote Keeper",
            desc: "A simple app that allows users to track their favorite quotes and sayings.",
            img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
    ]

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    };

    return (
    <div className="works" id="works">
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
                            <span>Projects</span>
                            </div>
                        </div>
                    <div className="right">
                        <img
                            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" 
                            alt=""
                            />
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
