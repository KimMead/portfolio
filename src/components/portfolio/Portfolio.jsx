import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { Person, Mail } from '@material-ui/icons';


import "./portfolio.scss";


export default function Portfolio() {
    
    return (
        <div className="portfolio" id="portfolio">
            <div className="wrapper">
                <div className="title">
                    <h1>Technologies</h1>
                    
                </div>
                <div className="container">
                
                <div class="ruby">
                    <img src="https://img.icons8.com/windows/32/000000/ruby-programming-language.png"/>
                    <p>Ruby</p>
                </div>
                <div class="javascript">
                    <img src="https://img.icons8.com/ios-filled/30/000000/javascript.png"/>
                    <p>Javascript</p>
                </div>
                <div className="react">
                    <img src="https://img.icons8.com/ios-filled/30/000000/react-native.png"/>
                    <p>React</p>
                </div>
                <div class="sql">
                    <img src="https://img.icons8.com/ios-filled/30/000000/sql.png"/>
                    <p>SQL</p>
                </div>
                <div class="html">
                    <img src="https://img.icons8.com/ios-filled/30/000000/html.png"/>
                    <p>HTML</p>
                </div>
                <div class="CSS">
                    <img src="https://img.icons8.com/ios-filled/30/000000/css.png"/>
                    <p>CSS</p>
                </div>
                
            </div>
            </div>

            

           
                
        </div>
           
    )
}
            
               

           