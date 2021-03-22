import React from "react";
import "./Recipe.scss";

const Recipe = ({ img }) => {

    return (
        <section className="recipe">
            <div className="recipe__container">
                <figure>
                    <a href="#"><img className="recipe__img" src={img} alt="" /></a>
                    <figcaption className="recipe__cap">
                        <h3><a href="#">Duck confit burger</a></h3>
                        <p>
                            <span>2879kcal</span>
                            <span>59kg</span>
                        </p>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Recipe;
