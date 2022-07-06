import styled from "@emotion/styled";
import { CenteredFlexbox } from "assets/styles/Common.styles";

export const PageNotFoundWrapper = styled(CenteredFlexbox)`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.background.dark};
    color: ${({ theme }) => theme.typography.inverted};
    font-weight: 700;
    font-size: 2.5rem;
`;
