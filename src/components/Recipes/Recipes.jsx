import React from "react";
import "./Recipes.scss";
import Recipe from "../Recipe/Recipe";
import a from '../../assets/imgs/thumbnails/t-1.jpg'
import b from '../../assets/imgs/thumbnails/t-2.jpg'
import c from '../../assets/imgs/thumbnails/t-3.jpg'
import d from '../../assets/imgs/thumbnails/t-4.jpg'
import e from '../../assets/imgs/thumbnails/t-5.jpg'
import f from '../../assets/imgs/thumbnails/t-6.jpg'

const Recipes = () => {
    return (
        <section className="recipes">
            <div className="recipes__container">
                <h1 className="recipes__title">Chicken</h1>
                <div className="recipes__grid">
                    <Recipe img={a} />
                    <Recipe img={b} />
                    <Recipe img={c} />
                    <Recipe img={d} />
                    <Recipe img={e} />
                    <Recipe img={f} />
                </div>
            </div>
        </section>
    );
};

export default Recipes;