import React from 'react';
import './Hero.scss';

const Hero = () => {
    
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__text">
                    <h1 className="hero__headline">Recipes Of Your Choice.</h1>
                    <p className="hero__desc">Get free recipes to make of your choice make any kind of food or 
snacking that your want.</p>
                    <a href="" className="hero__link">View Recipes</a>
                </div>
                <div className="hero__scroll">
                    <p><span></span></p>
                </div>
            </div>
        </section>
    )
}

export default Hero;