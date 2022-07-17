export const formatAbilityName = (name) => {
    switch (name) {
        case "dragons-maw":
            return "Dragon's Maw";
        default:
            return name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
    }
};
