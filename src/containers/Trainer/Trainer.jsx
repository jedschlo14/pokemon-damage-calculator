/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Pokemon } from "./pokemon/Pokemon";
import { Selector } from "components/selector";
import Plus from "assets/img/plus.png";
import { ContainerWrapper, ContainerHeader } from "assets/styles/Common.styles";
import { useTrainer } from "./useTrainer";

export const Trainer = ({ fieldStatus }) => {
    const {
        team,
        selectedIndex,
        handleSelector,
        createPokemon,
        removePokemon,
        changeAttribute,
        changeStat,
        selectMove,
    } = useTrainer(fieldStatus);

    return (
        <ContainerWrapper width="34rem">
            <ContainerHeader>Team</ContainerHeader>
            <Selector
                contentType="image"
                useIndex
                items={
                    team.length === 6
                        ? team.map((pkmn) => pkmn.sprite)
                        : [...team.map((pkmn) => pkmn.sprite), Plus]
                }
                onClick={(index) => handleSelector(index)}
                selected={selectedIndex}
                width="4rem"
                height="4rem"
                borderRadius="1rem"
                alignment="left"
            />
            {team.length > 0 ? (
                <Pokemon
                    pokemon={team[selectedIndex]}
                    fieldStatus={fieldStatus}
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
