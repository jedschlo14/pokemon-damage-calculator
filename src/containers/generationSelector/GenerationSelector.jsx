/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ContainerWrapper, ContainerHeader } from "assets/styles/Common.styles";
import {
    GenerationSelectorItem,
    GenerationWrapper,
} from "./GenerationSelector.styles";
const generations = ["RBY", "GSC", "ADV", "DPP", "BW", "XY", "SM", "SS"];

export const GenerationSelector = ({ generation, onChange }) => {
    return (
        <ContainerWrapper>
            <ContainerHeader>Select Generation</ContainerHeader>
            <GenerationWrapper>
                {generations.map((name, index) => {
                    return (
                        <GenerationSelectorItem
                            selected={generation === index ? 1 : 0}
                            key={index}
                            onClick={() => onChange(index)}
                            to={`/home/${index + 1}`}
                        >
                            {name}
                        </GenerationSelectorItem>
                    );
                })}
            </GenerationWrapper>
        </ContainerWrapper>
    );
};
