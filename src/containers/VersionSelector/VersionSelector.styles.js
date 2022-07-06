import styled from "@emotion/styled";
import { CenteredFlexbox } from "assets/styles/Common.styles";
import { Link } from "react-router-dom";

export const VersionSelectorWrapper = styled.div`
    width: 100%;
    border-radius: 1rem;
    background: ${(props) => props.theme.background.light};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const VersionSelectorHeader = styled(CenteredFlexbox)`
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.background.title};
    color: ${({ theme }) => theme.typography.inverted};
    font-weight: 800;
    font-size: 1.125rem;
`;

export const VersionsWrapper = styled(CenteredFlexbox)`
    gap: 1rem;
    padding: 1rem;
    font-weight: 700;
`;

export const VersionSelectorItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 2rem;
    border-radius: 0.5rem;
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
