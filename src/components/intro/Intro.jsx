import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";



export default function Intro() {
    const textRef = useRef();

    // useEffect(() => {
    //     init(textRef.current, { 
    //         showCursor: false, 
    //         strings: ["Web Developer"], 
    //     });
    // }, []);

    return (
        <div className="intro" id="intro">

            <div className="left">
                <div className="imgContainer">
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hello World! </h2>
                    <h1>I'm Kim Meadows</h1>
                    <h3> Web Developer <span ref={textRef}></span></h3>
                </div>
                
                <a href="#works">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
