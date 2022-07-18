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
    useIndex,
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
                    key={useIndex ? index : item.value}
                    selected={selectedIndex === (useIndex ? index : item.value)}
                    onClick={() => onClick(useIndex ? index : item.value)}
                >
                    {contentType === "text" ? (
                        <SelectorText>
                            {useIndex ? item : item.label}
                        </SelectorText>
                    ) : (
                        <SelectorImage src={useIndex ? item : item.src} />
                    )}
                </SelectorItem>
            ))}
        </SelectorWrapper>
    );
};
