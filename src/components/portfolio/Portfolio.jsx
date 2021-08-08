import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { Person, Mail } from '@material-ui/icons';

import "./portfolio.scss";


export default function Portfolio() {
    
    return (
        <div className="portfolio" id="portfolio">
        <h1>Technologies</h1>
        <div className="itemContainer">
                        <Mail className="icon" />
                        <span>kimmeadows8@gmail.com</span>
                    </div>
        </div>

        
    )
}
