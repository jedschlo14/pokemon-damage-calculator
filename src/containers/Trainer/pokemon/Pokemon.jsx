/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Autocomplete } from "components/inputs/autocomplete";
import { NumberEntry } from "components/inputs/numberEntry";
import { Type } from "components/type";
import { Stats } from "components/stats";
import { Moves } from "components/moves";
import { Health } from "components/health";
import { pkmnData, natureLabels, statuses, itemData } from "data";
import {
    FourColumnSpan,
    PokemonGrid,
    ThreeColumnSpan,
    AttributeTitle,
    TwoColumnSpan,
    RemoveButton,
} from "./Pokemon.styles";

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
        <PokemonGrid>
            <FourColumnSpan>
                <Autocomplete
                    header
                    id={pokemon.id}
                    data={pkmnData}
                    onChange={(id) => selectPokemon(id)}
                />
            </FourColumnSpan>
            <TwoColumnSpan>
                <RemoveButton onClick={removePokemon}>Remove</RemoveButton>
            </TwoColumnSpan>
            <AttributeTitle>Nature:</AttributeTitle>
            <ThreeColumnSpan>
                <Autocomplete
                    id={pokemon.nature}
                    data={natureLabels}
                    onChange={(id) => changeAttribute("nature", id)}
                />
            </ThreeColumnSpan>
            <TwoColumnSpan>
                Level:
                <NumberEntry
                    value={pokemon.level}
                    min={1}
                    max={100}
                    onChange={(value) => changeAttribute("level", value)}
                />
            </TwoColumnSpan>
            <AttributeTitle>Ability:</AttributeTitle>
            <ThreeColumnSpan>
                <Autocomplete
                    id={pokemon.ability}
                    data={pokemon.abilities}
                    onChange={(id) => changeAttribute("ability", id)}
                />
            </ThreeColumnSpan>
            {pokemon.hasOwnProperty("types") ? (
                <Type pokemon={pokemon} />
            ) : (
                <></>
            )}
            <AttributeTitle>Item:</AttributeTitle>
            <ThreeColumnSpan>
                <Autocomplete
                    id={pokemon.item}
                    data={itemData}
                    onChange={(id) => changeAttribute("item", id)}
                />
            </ThreeColumnSpan>
            <AttributeTitle>Status:</AttributeTitle>
            <ThreeColumnSpan>
                <Autocomplete
                    id={pokemon.status}
                    data={statuses}
                    onChange={(id) => changeAttribute("status", id)}
                />
            </ThreeColumnSpan>
            <Stats
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
        </PokemonGrid>
    );
};
