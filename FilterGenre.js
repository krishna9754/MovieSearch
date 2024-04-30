import React, { useState } from 'react'
import Data from './movieList.json'


export default function FilterGenre({ menuGenreItems, setItem, filterGenreItem}) {
    const dublicateGenreData = removeDuplicatesGenres(menuGenreItems);
    const [selected, setSelected] = useState()

    const handleGenreClick = (index, genre) => {
        if (index === selected) {
            setSelected(null);
            filterGenreItem(null);
        } else {
            setSelected(index);
            filterGenreItem(genre);
        }
    };

    return (
        <div>
            {
                dublicateGenreData.map((val, index) => (
                    <button key={index} onClick={() => handleGenreClick(index, val)}
                        style={{
                            border: "1px solid white",
                            borderRadius: "10px",
                            margin: "6px",
                            padding: "3px 15px 3px 15px",
                            backgroundColor: selected === index ? "grey" : "black",
                            color: selected === index ? "black" : "wheat"
                        }
                        }>{val}</button>
                ))
            }
            <button onClick={() => setItem(Data)}
                style={{
                    border: "1px solid white",
                    borderRadius: "10px",
                    margin: "6px",
                    padding: "3px 15px 3px 15px",
                    backgroundColor: "black",
                    color: "wheat"
                }
                }>All</button>
        </div>
    )
}


const removeDuplicatesGenres = (menuGenreItems) => {

    const uniqueGenres = new Set();

    menuGenreItems.forEach((movie) => {
        movie.forEach((genre) => {
            uniqueGenres.add(genre);
        });
    });

    const uniqueGenresArray = [...uniqueGenres];
    return uniqueGenresArray;
};
