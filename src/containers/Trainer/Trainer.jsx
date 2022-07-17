/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { Team } from "./team/Team";
import { Pokemon } from "./pokemon/Pokemon";
import { TrainerHeader, TrainerWrapper } from "./Trainer.styles";
import { natureValues } from "data";

const maxId = 898;

const basePokemon = {
    sprite: "",
    types: [],
    level: 50,
    nature: "bashful",
    abilities: [],
    ability: 0,
    item: 0,
    status: 1,
    stats: {
        hp: {
            unchangedBase: 0,
            base: 0,
            iv: 0,
            ev: 0,
            final: 0,
            stage: 7,
            current: 0,
            currentPct: 100,
            calculateFinal: true,
        },
        atk: {
            unchangedBase: 0,
            base: 0,
            iv: 0,
            ev: 0,
            final: 0,
            stage: 7,
            calculateFinal: true,
        },
        def: {
            unchangedBase: 0,
            base: 0,
            iv: 0,
            ev: 0,
            final: 0,
            stage: 7,
            calculateFinal: true,
        },
        spa: {
            unchangedBase: 0,
            base: 0,
            iv: 0,
            ev: 0,
            final: 0,
            stage: 7,
            calculateFinal: true,
        },
        spd: {
            unchangedBase: 0,
            base: 0,
            iv: 0,
            ev: 0,
            final: 0,
            stage: 7,
            calculateFinal: true,
        },
        spe: {
            base: 0,
            iv: 0,
            ev: 0,
            final: 0,
            stage: 7,
            calculateFinal: true,
        },
    },
    moves: [{ label: "None", value: 0 }],
    selectedMoves: [0, 0, 0, 0],
};

export const Trainer = ({ version }) => {
    const [team, setTeam] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState();

    const calculateStat = (stat, statObj, level) => {
        const bonus = stat === "hp" ? level + 10 : 5;
        const baseAndIv =
            version < 2
                ? 2 * (statObj.base + statObj.iv)
                : 2 * statObj.base + statObj.iv;
        return (
            Math.floor(
                ((baseAndIv + Math.floor(statObj.ev / 4)) * level) / 100
            ) + bonus
        );
    };

    const formatAbilityName = (name) => {
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

    const formatMoveName = (name) => {
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

    const createPokemon = (id, addNewPkmn) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((pkmn) => {
                const newPokemon = {
                    ...basePokemon,
                    id,
                    name: pkmn.name,
                    sprite: pkmn.sprites.other["official-artwork"]
                        .front_default,
                    types: pkmn.types.map((type) => type.type.name),
                    stats: {
                        hp: {
                            ...basePokemon.stats.hp,
                            unchangedBase: pkmn.stats[0].base_stat,
                            base: pkmn.stats[0].base_stat,
                            final: calculateStat(
                                "hp",
                                { base: pkmn.stats[0].base_stat, iv: 0, ev: 0 },
                                50
                            ),
                            current: calculateStat(
                                "hp",
                                { base: pkmn.stats[0].base_stat, iv: 0, ev: 0 },
                                50
                            ),
                        },
                        atk: {
                            ...basePokemon.stats.atk,
                            unchangedBase: pkmn.stats[1].base_stat,
                            base: pkmn.stats[1].base_stat,
                            final: calculateStat(
                                "atk",
                                { base: pkmn.stats[1].base_stat, iv: 0, ev: 0 },
                                50
                            ),
                        },
                        def: {
                            ...basePokemon.stats.def,
                            unchangedBase: pkmn.stats[2].base_stat,
                            base: pkmn.stats[2].base_stat,
                            final: calculateStat(
                                "def",
                                { base: pkmn.stats[2].base_stat, iv: 0, ev: 0 },
                                50
                            ),
                        },
                        spa: {
                            ...basePokemon.stats.spa,
                            unchangedBase: pkmn.stats[3].base_stat,
                            base: pkmn.stats[3].base_stat,
                            final: calculateStat(
                                "spa",
                                { base: pkmn.stats[3].base_stat, iv: 0, ev: 0 },
                                50
                            ),
                        },
                        spd: {
                            ...basePokemon.stats.spd,
                            unchangedBase: pkmn.stats[4].base_stat,
                            base: pkmn.stats[4].base_stat,
                            final: calculateStat(
                                "spd",
                                { base: pkmn.stats[4].base_stat, iv: 0, ev: 0 },
                                50
                            ),
                        },
                        spe: {
                            ...basePokemon.stats.spe,
                            unchangedBase: pkmn.stats[5].base_stat,
                            base: pkmn.stats[5].base_stat,
                            final: calculateStat(
                                "spe",
                                { base: pkmn.stats[5].base_stat, iv: 0, ev: 0 },
                                50
                            ),
                        },
                    },
                    weight: pkmn.weight,
                    ability: pkmn.abilities[0].ability.url.split("/")[6],
                    abilities: pkmn.abilities.map((ability) => {
                        return {
                            label: formatAbilityName(ability.ability.name),
                            value: ability.ability.url.split("/")[6],
                        };
                    }),
                    moves: [
                        { label: "None", value: 0 },
                        ...pkmn.moves.map((move) => {
                            return {
                                label: formatMoveName(move.move.name),
                                value: move.move.url.split("/")[6],
                            };
                        }),
                    ],
                };
                if (addNewPkmn) setTeam([...team, newPokemon]);
                else
                    setTeam(
                        team.map((pokemon, index) =>
                            index === selectedIndex ? newPokemon : pokemon
                        )
                    );
            });
        return basePokemon;
    };

    const addPokemon = (index) => {
        setSelectedIndex(index);
        setTeam([
            ...team,
            createPokemon(Math.floor(Math.random() * maxId) + 1, true),
        ]);
    };

    const removePokemon = () => {
        const maxIndex = team.length - 1;
        setTeam(team.filter((_, index) => index !== selectedIndex));
        if (selectedIndex === maxIndex) setSelectedIndex(maxIndex - 1);
    };

    const changeAttribute = (attribute, value) => {
        setTeam(
            team.map((pokemon, index) =>
                index === selectedIndex
                    ? {
                          ...pokemon,
                          [attribute]: value,
                      }
                    : pokemon
            )
        );
    };

    const changeStat = (pokemon, value, stat, type) => {
        var statObj = { ...pokemon.stats[stat] };
        switch (type) {
            case "stage":
                statObj.stage = value;
                break;
            case "base":
                statObj.base = value;
                if (!statObj.calculateFinal) {
                    statObj.iv = 0;
                    statObj.ev = 0;
                }
                statObj.calculateFinal = true;
                statObj.final = calculateStat(stat, statObj, pokemon.level);
                if (stat === "hp")
                    statObj.current = calculateStat(
                        stat,
                        statObj,
                        pokemon.level
                    );
                break;
            case "iv":
                statObj.iv = value;
                if (!statObj.calculateFinal) {
                    statObj.ev = 0;
                    statObj.base = statObj.unchangedBase;
                }
                statObj.calculateFinal = true;
                statObj.final = calculateStat(stat, statObj, pokemon.level);
                if (stat === "hp")
                    statObj.current = calculateStat(
                        stat,
                        statObj,
                        pokemon.level
                    );
                break;
            case "ev":
                statObj.ev = value;
                if (!statObj.calculateFinal) {
                    statObj.iv = 0;
                    statObj.base = statObj.unchangedBase;
                }
                statObj.calculateFinal = true;
                statObj.final = calculateStat(stat, statObj, pokemon.level);
                if (stat === "hp")
                    statObj.current = calculateStat(
                        stat,
                        statObj,
                        pokemon.level
                    );
                break;
            case "final":
                const nature = natureValues[pokemon.nature];
                const natureMultiplier =
                    1 +
                    (nature.increased === stat ? 0.1 : 0) -
                    (nature.decreased === stat ? 0.1 : 0);
                statObj.final = value / natureMultiplier;
                statObj.stage = 7;
                statObj.calculateFinal = false;
                if (stat === "hp") statObj.current = value / natureMultiplier;
                break;
            case "current":
                statObj.current = value;
                statObj.currentPct = +(
                    Math.round(
                        (statObj.current / statObj.final) * 100 + "e+2"
                    ) + "e-2"
                );
                break;
            case "currentPct":
                statObj.currentPct = value;
                statObj.current = Math.floor((value * statObj.final) / 100);
                break;
            default:
        }

        setTeam(
            team.map((pokemon, index) =>
                index === selectedIndex
                    ? {
                          ...pokemon,
                          stats: { ...pokemon.stats, [stat]: statObj },
                      }
                    : pokemon
            )
        );
    };

    const selectMove = (newMoveIndex, newMove) => {
        setTeam(
            team.map((pokemon, index) =>
                index === selectedIndex
                    ? {
                          ...pokemon,
                          selectedMoves: pokemon.selectedMoves.map(
                              (currentMoveId, moveIndex) =>
                                  moveIndex === newMoveIndex
                                      ? newMove
                                      : currentMoveId
                          ),
                      }
                    : pokemon
            )
        );
    };

    return (
        <TrainerWrapper>
            <TrainerHeader>Team</TrainerHeader>
            <Team
                team={team}
                selectedIndex={selectedIndex}
                addPokemon={(index) => addPokemon(index)}
                selectIndex={(index) => setSelectedIndex(index)}
            />
            {team.length > 0 ? (
                <Pokemon
                    pokemon={team[selectedIndex]}
                    version={version}
                    selectPokemon={(id) => createPokemon(id, false)}
                    removePokemon={() => removePokemon()}
                    changeAttribute={(attribute, value) =>
                        changeAttribute(attribute, value)
                    }
                    changeStat={(value, stat, type) =>
                        changeStat(team[selectedIndex], value, stat, type)
                    }
                    selectMove={(newMoveIndex, newMove) =>
                        selectMove(newMoveIndex, newMove)
                    }
                />
            ) : null}
        </TrainerWrapper>
    );
};
