/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Pokemon } from "./pokemon/Pokemon";
import { Selector } from "components/selector";
import Plus from "assets/img/plus.png";
import { ContainerWrapper, ContainerHeader } from "assets/styles/Common.styles";
import { useTrainer } from "./useTrainer";

export const Trainer = ({ generation }) => {
    const {
        team,
        selectedIndex,
        handleSelector,
        createPokemon,
        removePokemon,
        changeAttribute,
        changeStat,
        selectMove,
    } = useTrainer(generation);

    return (
        <ContainerWrapper width="34rem">
            <ContainerHeader>Team</ContainerHeader>
            <Selector
                contentType="image"
                items={
                    team.length === 6
                        ? team.map((pkmn) => pkmn.sprite)
                        : [...team.map((pkmn) => pkmn.sprite), Plus]
                }
                onClick={(index) => handleSelector(index)}
                selectedIndex={selectedIndex}
                width="4rem"
                height="4rem"
                borderRadius="1rem"
                alignment="left"
            />
            {team.length > 0 ? (
                <Pokemon
                    pokemon={team[selectedIndex]}
                    generation={generation}
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
        </ContainerWrapper>
    );
};
