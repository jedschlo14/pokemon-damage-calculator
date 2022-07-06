import styled from "@emotion/styled";
import { CenteredFlexbox } from "assets/styles/Common.styles";

export const TeamWrapper = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
`;

export const TeamItem = styled(CenteredFlexbox)`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    padding: 0.25rem;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    background-color: ${({ selected, theme }) =>
        selected ? theme.button.selected : theme.button.default};
    box-shadow: ${({ selected }) =>
        selected
            ? "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
            : "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"};
    &:hover {
        background-color: ${({ selected, theme }) =>
            selected ? theme.button.selected : theme.button.hover};
        cursor: ${({ selected }) => (selected ? "default" : "pointer")};
    }
`;

export const Sprite = styled.img`
    width: 100%;
    height: 100%;
`;
