import "./works.scss"

export default function Works() {
    return <div className="works" id="works">
        <div className="slider">
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src="assets/mobile.png" alt=""/>
                            </div>
                            <h2>Title</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Qui neque dolores fugiat debitis accusantium unde nemo nobis, 
                            </p>
                            <span>Projects</span>
                            </div>
                        </div>
                    <div className="right">
                        <img
                            src="" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/arrow.png" className="arrow left" alt=""/>
        <img src="assets/arrow.png" className="arrow right" alt=""/>
    </div>
    
}
