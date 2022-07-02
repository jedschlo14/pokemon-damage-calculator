import { useState } from "react";
import { Team } from "./Team";
import { Pokemon } from "./Pokemon";

const maxId = 898;

export const Trainer = ({ version }) => {
    const [team, setTeam] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const createPokemon = (id, add) => {
        const newPokemon = {
            id: id,
            sprite: "",
            types: [],
            level: 0,
            nature: 2,
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
        const url =
            "https://pokeapi.co/api/v2/pokemon/" +
            newPokemon.id.toString() +
            "/";
        fetch(url)
            .then((response) => response.json())
            .then(function (pokeData) {
                newPokemon.name = pokeData.name;
                newPokemon.level = 50;
                // newPokemon.sprite = pokeData.sprites.front_default;
                newPokemon.sprite =
                    pokeData.sprites.other["official-artwork"].front_default;
                newPokemon.types = pokeData.types.map((type) => type.type.name);
                newPokemon.stats.hp.base = pokeData.stats[0].base_stat;
                newPokemon.stats.atk.base = pokeData.stats[1].base_stat;
                newPokemon.stats.def.base = pokeData.stats[2].base_stat;
                newPokemon.stats.spa.base = pokeData.stats[3].base_stat;
                newPokemon.stats.spd.base = pokeData.stats[4].base_stat;
                newPokemon.stats.spe.base = pokeData.stats[5].base_stat;
                newPokemon.weight = pokeData.weight;
                newPokemon.abilities = pokeData.abilities.map(
                    (ability, index) => {
                        return {
                            label: ability.ability.name,
                            value: index + 1,
                            info: ability.ability.url.split("/")[6],
                        };
                    }
                );
                newPokemon.moves = pokeData.moves.map((move, index) => {
                    return {
                        label: move.move.name.split("-").join(" "),
                        value: index + 1,
                    };
                });
                // newPokemon.moves.unshift({ label: "", value: 0 });
                if (add) setTeam([...team, newPokemon]);
                else
                    setTeam(
                        team.map((pokemon, index) =>
                            index === selectedIndex ? newPokemon : pokemon
                        )
                    );
            });
        return newPokemon;
    };

    const addPokemon = (index) => {
        setSelectedIndex(index);
        if (index === team.length) {
            const newPokemon = createPokemon(
                Math.floor(Math.random() * maxId) + 1,
                true
            );
            setTeam([...team, newPokemon]);
        }
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
        <div>
            <div className="w-[31rem] bg-light shadow-md rounded-2xl">
                <div className="bg-title p-4 flex justify-center items-center rounded-2xl">
                    <div className="text-white font-extrabold text-lg">
                        Team
                    </div>
                </div>
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
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
