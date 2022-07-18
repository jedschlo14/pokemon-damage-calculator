import styled from "@emotion/styled";
import { CenteredFlexbox } from "assets/styles/Common.styles";

export const TypeWrapper = styled(CenteredFlexbox)`
    flex-direction: column;
    gap: 1rem;
    grid-column: span 2;
    grid-row: span 3;
`;

export const TypeItem = styled(CenteredFlexbox)`
    height: 2.25rem;
    width: 6.5rem;
    border-radius: 0.5rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.typography.inverted};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    cursor: default;
    background-color: ${({ theme, type }) => theme.types[type]};
`;
