import React from "react";
import "./Navbar.scss";
import { InlineIcon } from "@iconify/react";
import menu from "@iconify/icons-mdi-light/menu";

const Navbar = () => {
    return (
        <nav id="nav" className="nav">
            <div className="nav__container">
                <div className="nav__logo">
                    <span>Myka Recipes</span>
                </div>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="#" className="nav__link">
                            Recipes
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="#" className="nav__link">
                            Foods
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="#" className="nav__link nav__link--button">
                            Get A Quote
                        </a>
                    </li>
                </ul>
                <div className="nav__menu">
                    <InlineIcon icon={menu} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
