import React from "react";
import "./Navbar.scss";

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
                            Lorem.
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="#" className="nav__link">
                            Obcaecati?
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="#" className="nav__link nav__link--button">
                            Quia.
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
