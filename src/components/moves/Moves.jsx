/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { Autocomplete } from "components/autocomplete";
import { MovesTitle, MoveSelectorWrapper } from "./Moves.styles";

export const Moves = ({ pokemon, selectMove }) => {
    return (
        <Fragment>
            <MovesTitle>Moves:</MovesTitle>
            {[...Array(4).keys()].map((_, index) => {
                return (
                    <MoveSelectorWrapper key={index}>
                        <Autocomplete
                            id={pokemon["selectedMoves"][index]}
                            data={pokemon["moves"]}
                            onChange={(id) => selectMove(index, id)}
                        />
                    </MoveSelectorWrapper>
                );
            })}
        </Fragment>
    );
};
