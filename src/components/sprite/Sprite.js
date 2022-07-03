import React, { useState } from "react";

export const Sprite = ({ id }) => {
    const [sprite, setSprite] = useState();
    const [name, setName] = useState();

    const url = "https://pokeapi.co/api/v2/pokemon/" + id.toString() + "/";
    fetch(url)
        .then((response) => response.json())
        .then(function (pokeData) {
            setSprite(pokeData.sprites.other["official-artwork"].front_default);
            setName(pokeData.name);
        });

    return <img className="w-full h-full object-fit" src={sprite} alt={name} />;
};
