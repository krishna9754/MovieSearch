import React, { useState } from 'react'
import Data from './movieList.json'


export default function FilterLanguage({ menuLanguageItems, setItem, filterLanguageItem }) {
    const dublicateLanguageData = removeDuplicatesLanguage(menuLanguageItems);
    const [selected, setSelected] = useState()

    const handleLanguageClick = (index, language) => {
        if (index === selected) {
            setSelected(null);
            filterLanguageItem(null);
        } else {
            setSelected(index);
            filterLanguageItem(language);
        }
    };

    return (
        <div>
            {
                dublicateLanguageData.map((valLanguage, index) => (
                    <button key={index} onClick={() => handleLanguageClick(index, valLanguage)}
                        style={{
                            border: "1px solid white",
                            borderRadius: "10px",
                            margin: "6px",
                            padding: "3px 15px 3px 15px",
                            backgroundColor: selected === index ? "grey" : "black",
                            color: selected === index ? "black" : "wheat"
                        }
                        }>{valLanguage}</button>
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


const removeDuplicatesLanguage = (menuLanguageItems) => {

    const uniqueLanguage = new Set();

    menuLanguageItems.forEach((movie) => {
        movie.forEach((lang) => {
            uniqueLanguage.add(lang);
        });
    });

    const uniqueLanguageArray = [...uniqueLanguage];
    return uniqueLanguageArray;
};
