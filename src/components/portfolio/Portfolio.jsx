import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App 1</li>
                <li>Web App 2</li>
                <li>Web App 3</li>
                <li>Web App 4</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="" alt=""/>
                    <h3></h3>
                </div>
            </div>
        </div>
    )
}
