import React from "react";
import { BsInstagram } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="main-footer">
                <img src="logoCoMindFooter.svg" alt="logo"></img>

                <div className="site-map">
                    <h2>Mapa do Site</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#filter">Buscar</a></li>
                        <li><a href="/about">Sobre</a></li>
                        <li><a href="/indications">Indicações</a></li>
                        <li><a href="/testimonials">Depoimentos</a></li>
                    </ul>
                </div>
                <div className="social-media">
                    <a href="https://www.instagram.com/co.mind.fsn3/"><BsInstagram size={30} style={{ fill: 'white' }} /></a>
                    <a href="https://x.com/CoMindFSN3"><SlSocialTwitter size={30} style={{ fill: 'white' }} /></a>
                </div>
            </div>
            <hr />
            <div className="sub-footer">
                <p>&copy; 2025 Copyright - CoMind</p>
            </div>
        </footer>
    );
}

export default Footer;