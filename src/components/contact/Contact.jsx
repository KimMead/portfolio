import "./contact.scss" 
import { useState } from "react";
import { Person, Mail } from '@material-ui/icons';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Contact() {
   
    return (
        <div className="contact" id="contact">
            <div className="left">
                
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
