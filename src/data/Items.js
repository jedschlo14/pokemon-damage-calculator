const categories = [
    "effort-drop",
    "medicine",
    "other",
    "in-a-pinch",
    "picky-healing",
    "type-protection",
    "held-items",
    "choice",
    "effort-training",
    "bad-held-items",
    "plates",
    "species-specific",
    "type-enhancement",
    "jewels",
    "mega-stones",
    "memories",
    "z-crystals",
];

const formatName = (name) => {
    return name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

var itemData = [{ label: "None", value: 0 }];
categories.forEach((category) => {
    fetch(`https://pokeapi.co/api/v2/item-category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            data.items.forEach((item) => {
                itemData.push({
                    label:
                        category === "z-crystals"
                            ? formatName(item.name).slice(0, -4)
                            : formatName(item.name),
                    value: parseInt(item.url.split("/")[6]),
                });
            });
        });
});

export { itemData };
