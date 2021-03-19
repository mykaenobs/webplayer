import React from 'react';
import './App.scss';
import logo from './assets/imgs/logo/logo.svg';

const App = () => {
    return (
        <>
            <header className="header" id="header">
                <div className="hero center">
                    <div className="hero__container">
                        <nav id="nav" className="nav">
                            <div className="nav__logo">
                                <img src={logo} alt=""/>
                                <h1>indWorship</h1>
                            </div>
                            <ul className="nav__links">
                                <li className="nav__list"><a href="" className="nav__link">Omnis!</a></li>
                            </ul>
                        </nav>

                        <div className="hero__split">
                           <div className="hero__text text">
                               <h1 className="text__headline">Lorem, ipsum dolor.</h1>
                               <p className="text__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusantium corporis minima aspernatur distinctio iure doloremque, animi asperiores accusamus illo?</p>
                               <a href="" className="hero__button hero__button--purple">Lorem.</a><a href="" className="hero__button hero__button--outline">Laudantium?</a>
                           </div>
                           <div className="hero__img"></div>
                        </div>

                        <div className="footer">
                            <a href="#">Lorem.</a>
                            <a href="#">Numquam?</a>
                            <a href="#">Alias!</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default App;