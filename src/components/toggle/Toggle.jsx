/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import {
    SelectorWrapper,
    SelectorItem,
    SelectorText,
    SelectorImage,
} from "./Toggle.styles";

export const Toggle = ({
    item,
    isSelected,
    toggle,
    width,
    height,
    borderRadius,
}) => {
    return (
        <SelectorWrapper>
            <SelectorItem
                width={width}
                height={height}
                borderRadius={borderRadius}
                isSelected={isSelected}
                onClick={() => toggle(!isSelected)}
            >
                <SelectorText>{item}</SelectorText>
            </SelectorItem>
        </SelectorWrapper>
    );
};
