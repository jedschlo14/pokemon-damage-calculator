import styled from "@emotion/styled";
import { CenteredFlexbox } from "assets/styles/Common.styles";

export const PokemonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 0.5rem;
    padding: 0 1rem 1rem 1rem;
    font-weight: 700;
`;

export const RemoveButton = styled(CenteredFlexbox)`
    height: 100%;
    width: 10rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.typography.inverted};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    cursor: pointer;
    transition-duration: 200ms;
    background-color: ${({ theme }) => theme.button.secondary.default};
    &:hover {
        background-color: ${({ theme }) => theme.button.secondary.hover};
    }
`;

export const FourColumnSpan = styled.div`
    grid-column: span 4;
`;

export const ThreeColumnSpan = styled.div`
    grid-column: span 3;
`;

export const TwoColumnSpan = styled(CenteredFlexbox)`
    grid-column: span 2;
`;

export const AttributeTitle = styled(CenteredFlexbox)`
    justify-content: end;
    font-weight: 800;
`;
