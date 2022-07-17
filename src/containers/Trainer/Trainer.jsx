/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { Team } from "./team/Team";
import { Pokemon } from "./pokemon/Pokemon";
import { TrainerHeader, TrainerWrapper } from "./Trainer.styles";

const maxId = 898;

const basePokemon = {
    sprite: "",
    types: [],
    level: 50,
    nature: "bashful",
    abilities: [],
    ability: 1,
    item: 0,
    status: 1,
    stats: {
        hp: {
            base: 0,
            iv: 0,
            ev: 0,
            final: -1,
            stage: 7,
            current: -1,
            currentPct: 100,
        },
        atk: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
        def: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
        spa: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
        spd: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
        spe: { base: 0, iv: 0, ev: 0, final: -1, stage: 7 },
    },
    moves: [{}],
    selectedMoves: [0, 0, 0, 0],
};

export const Trainer = ({ version }) => {
    const [team, setTeam] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState();

    console.log(selectedIndex);

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
                            base: pkmn.stats[0].base_stat,
                        },
                        atk: {
                            ...basePokemon.stats.atk,
                            base: pkmn.stats[1].base_stat,
                        },
                        def: {
                            ...basePokemon.stats.def,
                            base: pkmn.stats[2].base_stat,
                        },
                        spa: {
                            ...basePokemon.stats.spa,
                            base: pkmn.stats[3].base_stat,
                        },
                        spd: {
                            ...basePokemon.stats.spd,
                            base: pkmn.stats[4].base_stat,
                        },
                        spe: {
                            ...basePokemon.stats.spe,
                            base: pkmn.stats[5].base_stat,
                        },
                    },
                    weight: pkmn.weight,
                    abilities: pkmn.abilities.map((ability, index) => {
                        return {
                            label: ability.ability.name,
                            value: index + 1,
                            info: ability.ability.url.split("/")[6],
                        };
                    }),
                    moves: pkmn.moves.map((move, index) => {
                        return {
                            label: move.move.name.split("-").join(" "),
                            value: index + 1,
                        };
                    }),
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

    const changeStat = (value, stat, type) => {
        var statObj = { ...team[selectedIndex].stats[stat] };
        if (type === "stage") statObj.stage = value;
        else if (
            type !== "final" &&
            team[selectedIndex].stats[stat].final === -1
        )
            statObj[type] = value;
        else if (type === "final") {
            statObj.final = value;
            statObj.iv = -1;
            statObj.ev = -1;
            statObj.stage = 7;
        } else if (type === "iv") {
            statObj.iv = value;
            statObj.ev = 0;
            statObj.final = -1;
            if (stat === "hp") statObj.current = -1;
        } else if (type === "ev") {
            statObj.iv = 0;
            statObj.ev = value;
            statObj.final = -1;
            if (stat === "hp") statObj.current = -1;
        }
        if (type === "current") {
            statObj.current = value;
            if (statObj.final === -1) {
                const final =
                    team[selectedIndex].stats.hp.final === -1
                        ? Math.floor(
                              ((2 * team[selectedIndex].stats.hp.base +
                                  team[selectedIndex].stats.hp.iv +
                                  Math.floor(
                                      team[selectedIndex].stats.hp.ev / 4
                                  )) *
                                  team[selectedIndex].level) /
                                  100
                          ) +
                          team[selectedIndex].level +
                          10
                        : team[selectedIndex].stats.hp.final;
                statObj.currentPct = Math.floor(
                    (statObj.current / final) * 100
                );
            } else
                statObj.currentPct = Math.floor(
                    (statObj.current / statObj.final) * 100
                );
        } else if (type === "currentPct") {
            statObj.currentPct = value;
            if (statObj.final === -1) {
                const final =
                    team[selectedIndex].stats.hp.final === -1
                        ? Math.floor(
                              ((2 * team[selectedIndex].stats.hp.base +
                                  team[selectedIndex].stats.hp.iv +
                                  Math.floor(
                                      team[selectedIndex].stats.hp.ev / 4
                                  )) *
                                  team[selectedIndex].level) /
                                  100
                          ) +
                          team[selectedIndex].level +
                          10
                        : team[selectedIndex].stats.hp.final;
                statObj.current = Math.floor((value * final) / 100);
            } else statObj.current = Math.floor((value * statObj.final) / 100);
        } else if (stat === "hp") {
            statObj.current = statObj.final;
            statObj.currentPct = 100;
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
                        changeStat(value, stat, type)
                    }
                    selectMove={(newMoveIndex, newMove) =>
                        selectMove(newMoveIndex, newMove)
                    }
                />
            ) : null}
        </TrainerWrapper>
    );
};
