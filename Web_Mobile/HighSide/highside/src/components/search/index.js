import React from 'react';
import '../../App.css'


const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="OuaisCBoMaisçafonctionnepas"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;