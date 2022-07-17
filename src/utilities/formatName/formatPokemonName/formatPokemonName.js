export const formatPokemonName = (name) => {
    switch (name) {
        case "nidoran-f":
            return "Nidoran♀";
        case "nidoran-m":
            return "Nidoran♂";
        case "farfetchd":
            return "Farfetch'd";
        case "mr-mime":
            return "Mr. Mime";
        case "mime-jr":
            return "Mime Jr.";
        case "porygon-z":
            return "Porygon-Z";
        case "flabebe":
            return "Flabébé";
        case "type-null":
            return "Type: Null";
        case "jangmo-o":
            return "Jangmo-o";
        case "hakamo-o":
            return "Hakamo-o";
        case "kommo-o":
            return "Kommo-o";
        case "sirfetchd":
            return "Sirfetch'd";
        default:
            return name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
    }
};
