import styled from "@emotion/styled";
import { CenteredFlexbox } from "assets/styles/Common.styles";
export const SelectorWrapper = styled(CenteredFlexbox)`
    gap: 1rem;
`;

export const SelectorItem = styled(CenteredFlexbox)`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: ${({ borderRadius }) => borderRadius};
    padding: 0.25rem;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    background-color: ${({ isSelected, theme }) =>
        isSelected ? theme.button.selected : theme.button.default};
    box-shadow: ${({ isSelected }) =>
        isSelected
            ? "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
            : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"};
    &:hover {
        background-color: ${({ isSelected, theme }) =>
            isSelected ? theme.button.selected : theme.button.hover};
        cursor: pointer;
    }
`;

export const SelectorText = styled.div`
    font-weight: 700;
`;

export const SelectorImage = styled.img`
    width: 100%;
    height: 100%;
`;
