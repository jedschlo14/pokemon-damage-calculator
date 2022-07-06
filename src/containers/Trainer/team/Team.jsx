/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { TeamItem, TeamWrapper, Sprite, Cross } from "./Team.styles";

export const Team = ({ team, selectedIndex, addPokemon, selectIndex }) => {
    return (
        <TeamWrapper>
            {team.map((pokemon, index) => {
                return (
                    <TeamItem
                        selected={selectedIndex === index ? 1 : 0}
                        key={index}
                        onClick={() => selectIndex(index)}
                    >
                        <Sprite src={pokemon.sprite} alt={pokemon.name} />
                    </TeamItem>
                );
            })}
            {team.length < 6 ? (
                <TeamItem onClick={() => addPokemon(team.length)}>
                    <Cross />
                </TeamItem>
            ) : null}
        </TeamWrapper>
    );
};
