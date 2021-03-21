import React from "react";
import Nav from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="header__container">
                <Nav />
                <Hero />
            </div>
        </header>
    );
};

export default Header;
