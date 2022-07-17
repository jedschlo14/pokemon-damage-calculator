/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ContainerWrapper, ContainerHeader } from "assets/styles/Common.styles";
import { VersionSelectorItem, VersionsWrapper } from "./VersionSelector.styles";
const versions = ["RBY", "GSC", "ADV", "DPP", "BW", "XY", "SM", "SS"];

export const VersionSelector = ({ version, onChange }) => {
    return (
        <ContainerWrapper>
            <ContainerHeader>Select Version</ContainerHeader>
            <VersionsWrapper>
                {versions.map((name, index) => {
                    return (
                        <VersionSelectorItem
                            selected={version === index ? 1 : 0}
                            key={index}
                            onClick={() => onChange(index)}
                            to={`/home/${index + 1}`}
                        >
                            {name}
                        </VersionSelectorItem>
                    );
                })}
            </VersionsWrapper>
        </ContainerWrapper>
    );
};
