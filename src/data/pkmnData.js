const formatName = (name) => {
    switch (name) {
        case "nidoran-f":
            return "Nidoran♀";
        case "nidoran-m":
            return "Nidoran♂";
        case "farfetchd":
            return "Farfetch'd";
        case "mr-mime":
            return "Mr. Mime";
        case "deoxys-normal":
            return "Deoxys";
        case "wormadam-plant":
            return "Wormadam";
        case "mime-jr":
            return "Mime Jr.";
        case "porygon-z":
            return "Porygon-Z";
        case "giratina-altered":
            return "Giratina";
        case "shaymin-land":
            return "Shaymin";
        case "basculin-red-striped":
            return "Basculin";
        case "darmanitan-standard":
            return "Darmanitan";
        case "tornadus-incarnate":
            return "Tornadus";
        case "thundurus-incarnate":
            return "Thundurus";
        case "landorus-incarnate":
            return "Landorus";
        case "keldeo-ordinary":
            return "Keldeo";
        case "meloetta-aria":
            return "Meloetta";
        case "flabebe":
            return "Flabébé";
        case "meowstic-male":
            return "Meowstic";
        case "aegislash-shield":
            return "Aegislash";
        case "pumpkaboo-average":
            return "Pumpkaboo";
        case "gourgeist-average":
            return "Gourgeist";
        case "zygarde-50":
            return "Zygarde";
        case "oricorio-baile":
            return "Oricorio";
        case "lycanroc-midday":
            return "Lycanroc";
        case "wishiwashi-solo":
            return "Wishiwashi";
        case "type-null":
            return "Type: Null";
        case "minior-red-meteor":
            return "Minior";
        case "mimikyu-disguised":
            return "Mimikyu";
        case "jangmo-o":
            return "Jangmo-o";
        case "hakamo-o":
            return "Hakamo-o";
        case "kommo-o":
            return "Kommo-o";
        case "toxtricity-amped":
            return "Toxtricity";
        case "sirfetchd":
            return "Sirfetch'd";
        case "eiscue-ice":
            return "Eiscue";
        case "indeedee-male":
            return "Indeedee";
        case "morpeko-full-belly":
            return "Morpeko";
        case "urshifu-single-strike":
            return "Urshifu";
        case "basculegion-male":
            return "Basculegion";
        case "enamorus-incarnate":
            return "Enamorus";
        default:
            return name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
    }
};

var pkmnData = [];
fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
    .then((res) => res.json())
    .then((data) => {
        data.results.forEach((pkmn) => {
            if (parseInt(pkmn.url.split("/")[6]) < 10000)
                pkmnData.push({
                    label: formatName(pkmn.name),
                    value: parseInt(pkmn.url.split("/")[6]),
                });
        });
    });

export { pkmnData };
