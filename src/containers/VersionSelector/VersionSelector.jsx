/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import {
    VersionSelectorHeader,
    VersionSelectorItem,
    VersionSelectorWrapper,
    VersionsWrapper,
} from "./VersionSelector.styles";
const versions = ["RBY", "GSC", "ADV", "DPP", "BW", "XY", "SM", "SS"];

export const VersionSelector = ({ version, onChange }) => {
    return (
        <VersionSelectorWrapper>
            <VersionSelectorHeader>Select Version</VersionSelectorHeader>
            <VersionsWrapper>
                {versions.map((name, index) => {
                    return (
                        <VersionSelectorItem
                            selected={version === index ? 1 : 0}
                            key={index}
                            onClick={() => onChange(index)}
                            to={`/${index + 1}`}
                        >
                            {name}
                        </VersionSelectorItem>
                    );
                })}
            </VersionsWrapper>
        </VersionSelectorWrapper>
    );
};
