export const formatMoveName = (name) => {
    switch (name) {
        case "double-edge":
            return "Double-Edge";
        case "self-destruct":
            return "Self-Destruct";
        case "lock-on":
            return "Lock-On";
        case "will-o-wisp":
            return "Will-O-Wisp";
        case "u-turn":
            return "U-Turn";
        case "x-scissor":
            return "X-Scissor";
        case "v-create":
            return "V-create";
        case "trick-or-treat":
            return "Trick-or-Treat";
        case "forests-curse":
            return "Forest's Curse";
        case "freeze-dry":
            return "Freeze-Dry";
        case "topsy-turvy":
            return "Topsy-Turvy";
        case "kings-shield":
            return "King's Shield";
        case "baby-doll-eyes":
            return "Baby-Doll Eyes";
        case "power-up-punch":
            return "Power-Up Punch";
        case "lands-wrath":
            return "Land's Wrath";
        case "all-out-pummeling":
            return "All-Out Pummeling";
        case "never-ending-nightmare":
            return "Never-Ending Nightmare";
        case "soul-stealing-7-star-strike":
            return "Soul-Stealing 7-Star Strike";
        case "natures-madness":
            return "Nature's Madness";
        case "multi-attack":
            return "Multi-Attack";
        case "10000000-volt-thunderbolt":
            return "10,000,000 Volt Thunderbolt";
        case "lets-snuggle-forever":
            return "Let's Snuggle Forever";
        default:
            return name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
    }
};
