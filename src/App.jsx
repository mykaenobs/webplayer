import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";

const App = () => {
    const YOUR_APP_ID = "a41cc3ff";
    const YOUR_APP_KEY = "a72ce9710b1b991f6e7f3d43096ec792";
    const [data, setData] = useState({ hits: [] });

    useEffect(() => {
        document.title = "Recipe App";
        recipeApi();
    }, []);

    const recipeApi = async () => {
        const res = await fetch(
            `https://api.edamam.com/search?q=burger&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
        );
        const data = await res.json();
        console.log(data);
    };

    return (
        <>
            <Header />
        </>
    );
};

export default App;
