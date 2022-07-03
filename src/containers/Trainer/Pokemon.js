import { Selector } from "components/selector";
import { NumberEntry } from "components/numberEntry";
import { Type } from "components/type";
import { StatEdit } from "components/stats";
import { Moves } from "components/moves";
import { Health } from "components/health";
import { pkmnData, natures, statuses, itemData } from "data";

export const Pokemon = ({
    pokemon,
    version,
    selectPokemon,
    removePokemon,
    changeAttribute,
    changeStat,
    selectMove,
}) => {
    console.log(pokemon);
    return (
        <div className="px-4 font-bold">
            <div className="grid grid-cols-6 gap-2 pb-4">
                <div className="col-span-4">
                    <Selector
                        id={pokemon.id}
                        data={pkmnData}
                        onChange={(id) => selectPokemon(id)}
                    />
                </div>
                <div
                    className="col-span-2 rounded-xl flex justify-center items-center text-white hover:bg-button-secondary-hover bg-button-secondary shadow-md cursor-pointer duration-200"
                    onClick={removePokemon}
                >
                    Remove
                </div>
                <div className="flex justify-center items-center font-extrabold">
                    Nature:
                </div>
                <div className="col-span-3">
                    <Selector
                        id={pokemon.nature}
                        data={natures}
                        onChange={(id) => changeAttribute("nature", id)}
                    />
                </div>
                <div className="col-span-2 flex gap-2 justify-center items-center font-extrabold">
                    Level:
                    <NumberEntry
                        value={pokemon.level}
                        min={1}
                        max={100}
                        onChange={(value) => changeAttribute("level", value)}
                    />
                </div>
                <div className="flex justify-center items-center font-extrabold">
                    Ability:
                </div>
                <div className="col-span-3 capitalize">
                    <Selector
                        id={pokemon.ability}
                        data={pokemon.abilities}
                        onChange={(id) => changeAttribute("ability", id)}
                    />
                </div>
                {pokemon.hasOwnProperty("types") ? (
                    <Type pokemon={pokemon} />
                ) : (
                    <></>
                )}
                <div className="flex justify-center items-center font-extrabold">
                    Item:
                </div>
                <div className="col-span-3 capitalize">
                    <Selector
                        id={pokemon.item}
                        data={itemData}
                        onChange={(id) => changeAttribute("item", id)}
                    />
                </div>
                <div className="flex justify-center items-center font-extrabold">
                    Status:
                </div>
                <div className="col-span-3">
                    <Selector
                        id={pokemon.status}
                        data={statuses}
                        onChange={(id) => changeAttribute("status", id)}
                    />
                </div>
                <StatEdit
                    pokemon={pokemon}
                    version={version}
                    changeStat={(value, stat, type) =>
                        changeStat(value, stat, type)
                    }
                />
                <Moves
                    pokemon={pokemon}
                    selectMove={(newMoveIndex, newMove) =>
                        selectMove(newMoveIndex, newMove)
                    }
                />
                <Health
                    pokemon={pokemon}
                    changeStat={(value, stat, type) =>
                        changeStat(value, stat, type)
                    }
                />
            </div>
        </div>
    );
};
