import React from "react";
import "./Recipe.scss";

const Recipe = ({ img }) => {

    return (
        <section className="recipe">
            <div className="recipe__container">
                <figure>
                    <img className="recipe__img" src={img} alt="" />
                    <figcaption className="recipe__cap">
                        <h3><a href="#">Duck confit burger</a></h3>
                        <p>
                            <a href="">See Recipe</a>
                        </p>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Recipe;
