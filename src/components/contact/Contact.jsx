import "./contact.scss" 
import { useState } from "react";
import { Person, Mail } from '@material-ui/icons';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks for your message! I'll reply shortly :)</span>}
                </form>
                <div className="itemContainer">
                        <Mail className="icon" />
                        <span>kimmeadows8@gmail.com</span>
                    </div>
                    
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <AiFillGithub className="icon" />
                        <a href='https://github.com/KimMead'></a>
                    </div>
            </div>
        </div>
    );
}
