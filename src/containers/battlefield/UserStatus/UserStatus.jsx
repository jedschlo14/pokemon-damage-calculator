/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Selector } from "components/selector";

const gen1statuses = [
    { label: "Reflect", value: "reflect" },
    { label: "Light Screen", value: "lightScreen" },
    { label: "Leech Seed", value: "leechSeed" },
];
const gen2statuses = [
    { label: "Spikes", value: "spikes" },
    { label: "Protect", value: "protect" },
    { label: "Foresight", value: "foresight" },
    { label: "Switching Out", value: "switchingOut" },
];
const gen3statuses = [
    { label: "Spikes 2", value: "spikes2" },
    { label: "Spikes 3", value: "spikes3" },
    { label: "Helping Hand", value: "helpingHand" },
];
const gen4statuses = [
    { label: "Stealth Rock", value: "stealthRock" },
    { label: "Tailwind", value: "tailwind" },
];
const gen5statuses = [{ label: "Friend Guard", value: "friendGuard" }];
const gen7statuses = [
    { label: "Aurora Veil", value: "auroraVeil" },
    { label: "+1 All Stats", value: "plus1AllStats" },
    { label: "Battery", value: "battery" },
];
const gen8statuses = [
    { label: "Steelsurge", value: "steelsurge" },
    { label: "Vine Lash", value: "vineLash" },
    { label: "Wildfire", value: "wildfire" },
    { label: "Connonade", value: "connonade" },
    { label: "Volcalith", value: "volcalith" },
    { label: "Power Spot", value: "powerSpot" },
]; // remove +1 All Stats

export const UserStatus = ({ fieldStatus, onChange }) => {
    const statuses = [
        ...(fieldStatus.generation >= 1 ? gen1statuses : []),
        ...(fieldStatus.generation >= 2 ? gen2statuses : []),
        ...(fieldStatus.generation >= 3 ? gen3statuses : []),
        ...(fieldStatus.generation >= 4 ? gen4statuses : []),
        ...(fieldStatus.generation >= 5 ? gen5statuses : []),
        ...(fieldStatus.generation >= 7 ? gen7statuses : []),
        ...(fieldStatus.generation >= 8 ? gen8statuses : []),
    ];

    return (
        <Selector
            contentType="text"
            items={statuses}
            onClick={onChange}
            selected={fieldStatus.userStatus}
            width="4rem"
            height="2rem"
            borderRadius="0.5rem"
            multi
        />
    );
};
