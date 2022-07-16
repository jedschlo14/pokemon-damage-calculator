var pkmnData = [];
fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach((pkmn) => {
            pkmnData.push({
                label: pkmn.name,
                value: parseInt(pkmn.url.split("/")[6]),
            });
        });
    });

export { pkmnData };
