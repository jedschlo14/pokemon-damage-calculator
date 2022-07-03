/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { TypeWrapper, TypeItem } from "./Type.styles";

export const Type = ({ pokemon }) => {
    return (
        <TypeWrapper>
            {pokemon.types.map((type, index) => {
                return (
                    <TypeItem type={type} key={index}>
                        {type}
                    </TypeItem>
                );
            })}
        </TypeWrapper>
    );
};
