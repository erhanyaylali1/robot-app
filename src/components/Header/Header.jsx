import React, { act } from "react";
import './Header.css';
import Logo from '../../assets/Logo.svg';
import Search from "../../assets/SearchIcon.svg";
import Card from "../../assets/CardIcon.svg";
import Mail from "../../assets/MailIcon.svg";

const Header = () => {
    const links = ["Featured", "Bags", "Wallets", "Accesories", "Tech", "Travel", "About Us"];
    const actions = ["Help", "Find in Store"];
    const logos = [Search, Mail, Card];

    const renderLinks = () => {
        return links.map((link) => (
            <a href="/" className="header__links__item" key={link}>
                {link}
            </a>
        ))
    }

    const renderActions = () => {
        const returnContent = [];

        actions.forEach((action) => {
            returnContent.push(
                <a href="/" className="header__actions__item" key={action}>
                    {action}
                </a>
            )
        })

        logos.forEach((logo) => {
            returnContent.push(
                <a href="/" className="header__actions__logo" key={logo}>
                    <img src={logo} height={20} width={"auto"} />
                </a>
            )
        })

        return returnContent;
    }
    
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} height={50} width={"auto"} />
            </div>
            <div className="header__links">
                {renderLinks()}
            </div>
            <div className="header__actions">
                {renderActions()}
            </div>
        </header>
    )
}

export default Header;