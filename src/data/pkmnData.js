import { formatPokemonName } from "utilities/formatName";

var pkmnData = [];
fetch("https://pokeapi.co/api/v2/pokemon-species?limit=10000")
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach((pkmn) => {
            if (parseInt(pkmn.url.split("/")[6]) < 10000)
                pkmnData.push({
                    label: formatPokemonName(pkmn.name),
                    value: parseInt(pkmn.url.split("/")[6]),
                });
        });
    });

export { pkmnData };
