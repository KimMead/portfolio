import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";


export default function Portfolio() {
    const [selected,setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
    ];
    return (
        <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
            <ul>
                {list.map(item=> (
                    <PortfolioList 
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://c.stocksy.com/a/xZE700/z9/1724341.jpg" alt=""/>
                    <h3></h3>
                </div>
            </div>

           
        </div>
    )
}
