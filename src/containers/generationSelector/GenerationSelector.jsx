/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ContainerWrapper, ContainerHeader } from "assets/styles/Common.styles";
import { Selector } from "components/selector";

const generations = ["RBY", "GSC", "ADV", "DPP", "BW", "XY", "SM", "SS"];

export const GenerationSelector = ({ generation, onChange }) => {
    return (
        <ContainerWrapper>
            <ContainerHeader>Select Generation</ContainerHeader>
            <Selector
                contentType="text"
                items={generations}
                onClick={onChange}
                selectedIndex={generation}
                width="4rem"
                height="2rem"
                borderRadius="0.5rem"
            />
        </ContainerWrapper>
    );
};
