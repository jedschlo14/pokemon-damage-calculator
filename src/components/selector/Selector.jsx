/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import {
    SelectorWrapper,
    SelectorItem,
    SelectorText,
    SelectorImage,
} from "./Selector.styles";

const toggleArrayElement = (array, value) => {
    const index = array.indexOf(value);
    return index === -1
        ? [...array, value]
        : array.filter((item) => item !== value);
};

export const Selector = ({
    contentType,
    items,
    onClick,
    selected,
    width,
    height,
    borderRadius,
    alignment,
    useIndex,
    multi,
}) => {
    return (
        <SelectorWrapper alignment={alignment} hasItems={items.length !== 0}>
            {items.map((item, index) => (
                <SelectorItem
                    width={width}
                    height={height}
                    borderRadius={borderRadius}
                    multi={multi}
                    key={index}
                    isSelected={
                        multi
                            ? selected.includes(useIndex ? index : item.value)
                            : selected === (useIndex ? index : item.value)
                    }
                    onClick={() =>
                        onClick(
                            multi
                                ? toggleArrayElement(
                                      selected,
                                      useIndex ? index : item.value
                                  )
                                : useIndex
                                ? index
                                : item.value
                        )
                    }
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
