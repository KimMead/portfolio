import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { Person, Mail } from '@material-ui/icons';


import "./portfolio.scss";


export default function Portfolio() {
    
    return (
        <div className="portfolio" id="portfolio">
            <h1>Technologies</h1>
        

            <div class="view_wrap grid-view">

                <div class="view_item">
                        <div class="vi_left"></div>
                    <img src="https://img.icons8.com/ios-filled/20/000000/ruby-programming-language.png"/>
                </div>

                <div class="vi_right">
                    <p class="title">Ruby on Rails</p>
                </div>
            </div>

                <div class="view_item">
                    <div class="vi_left"></div>
                    <img src="https://img.icons8.com/ios-filled/30/000000/javascript.png"/>
                </div>

                <div class="vi_right">
                    <p class="title">Javascript</p>
                </div>

                <div class="view_item">
                    <div class="vi_left"></div>
                    <img src="https://img.icons8.com/ios-filled/30/000000/sql.png"/>
                </div>

                <div class="vi_right">
                    <p class="title">SQL</p>
                </div>

                <div class="view_item">
                    <div class="vi_left"></div>
                    <img src="https://img.icons8.com/ios-filled/30/000000/html.png"/>
                </div>

                <div class="vi_right">
                    <p class="title">HTML</p>
                </div>

                <div class="view_item">
                    <div class="vi_left"></div>
                    <img src="https://img.icons8.com/ios-filled/30/000000/css.png"/>
                </div>

                <div class="vi_right">
                    <p class="title">CSS</p>
                </div>

        </div>
           

        
    )
}
