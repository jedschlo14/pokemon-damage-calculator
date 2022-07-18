/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ContainerWrapper, ContainerHeader } from "assets/styles/Common.styles";
import { Selector } from "components/selector";

const generations = [
    { label: "RBY", value: 1 },
    { label: "GSC", value: 2 },
    { label: "ADV", value: 3 },
    { label: "DPP", value: 4 },
    { label: "BW", value: 5 },
    { label: "XY", value: 6 },
    { label: "SM", value: 7 },
    { label: "SS", value: 8 },
];

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
