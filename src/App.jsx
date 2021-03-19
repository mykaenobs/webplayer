import React from 'react';
import './App.scss';
import logo from './assets/imgs/logo/logo.svg';
import light from './assets/imgs/icons/light.svg';

const App = () => {
    return (
        <>
            <header className="header" id="header">
                <div className="auro">
                    <span className="auro__effect auro__effect--dark-blue"></span>
                    <span className="auro__effect auro__effect--green"></span>
                    <span className="auro__effect auro__effect--blue"></span>
                    <span className="auro__effect auro__effect--purple-pink"></span>
                    <span className="auro__effect auro__effect--purple"></span>
                </div>
                <div className="hero center">
                    <div className="hero__container">
                        <nav id="nav" className="nav">
                            <div className="nav__logo">
                                <img src={logo} alt=""/>
                                <h1>indWorship</h1>
                            </div>
                            <ul className="nav__links">
                                <li className="nav__list"><a href="" className="nav__link"><img src={light} alt="Light" /></a></li>
                            </ul>
                        </nav>

                        <div className="hero__split">
                           <div className="hero__text text">
                               <h1 className="text__headline">Get Real Music</h1>
                               <p className="text__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo blanditiis tenetur corporis. Quidem, officia!</p>
                               <a href="" className="hero__button hero__button--purple">Sign Up</a>
                               <a href="" className="hero__button hero__button--outline">Browse Songs</a>
                           </div>
                           <div className="hero__img"></div>
                        </div>

                        <div className="hero__footer">
                            <a href="#">Terms and Conditions</a>
                            <a href="#">Help?</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default App;