/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import {
    SelectorWrapper,
    SelectorItem,
    SelectorText,
    SelectorImage,
} from "./Selector.styles";

export const Selector = ({
    contentType,
    items,
    onClick,
    selectedIndex,
    width,
    height,
    borderRadius,
    alignment,
}) => {
    return (
        <SelectorWrapper alignment={alignment}>
            {items.map((item, index) => (
                <SelectorItem
                    width={width}
                    height={height}
                    borderRadius={borderRadius}
                    key={index}
                    selected={selectedIndex === index ? 1 : 0}
                    onClick={() => onClick(index)}
                >
                    {contentType === "text" ? (
                        <SelectorText>{item}</SelectorText>
                    ) : (
                        <SelectorImage src={item} />
                    )}
                </SelectorItem>
            ))}
        </SelectorWrapper>
    );
};
