/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { SpriteImage } from "./Sprite.styles";

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

    return <SpriteImage src={sprite} alt={name} />;
};
