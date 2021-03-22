import React from "react";
import "./Search.scss";
import { InlineIcon } from "@iconify/react";
import search from "@iconify/icons-mdi-light/magnify";

const Search = () => {
    return (
        <div className="search">
            <form action="" className="form">
                <label htmlFor="search" className="form__group">
                    <input type="text" name="search" id="search" className="form__input" placeholder="Search" />
                    <button className="form__button"><InlineIcon icon={search} /></button>
                </label>
            </form>
        </div>
    );
};

export default Search;