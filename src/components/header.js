import React from 'react';

import ContactMeBtn from './contact-me-btn';

import './header.css';

export default class Header extends React.Component {
    render() {
        return <header>
            <div id="header-texture"></div>
            <img id="jesse-img" src="assets/jesse-img.jpg" alt="Jesse in a tux" />
            <img id="bowtie" src="assets/bowtie.png" alt="Bow Tie" />
            <p id="jesse-title"><b>Jesse Westendorf</b><br />LAMP/Android Developer</p>
            <ContactMeBtn className="contact-me-btn" />
        </header>
    }
}