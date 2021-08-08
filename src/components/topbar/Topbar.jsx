import "./topbar.scss";
import { Person, Mail } from '@material-ui/icons';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">kim meadows.</a>
                   
                    {/* <div className="itemContainer">
                        <Mail className="icon" />
                        <span>kimmeadows8@gmail.com</span>
                    </div> */}
                    
                </div>
                <div className="right">
                    {/* <div className="itemContainer">
                        <AiFillGithub className="icon" />
                        <a href='https://github.com/KimMead'></a>
                    </div> */}

                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
