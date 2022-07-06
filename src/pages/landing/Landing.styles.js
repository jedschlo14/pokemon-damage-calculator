import styled from "@emotion/styled";
import { CenteredFlexbox } from "assets/styles/Common.styles";

export const LandingWrapper = styled(CenteredFlexbox)`
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: auto;
    background-color: ${({ theme }) => theme.background.dark};
`;
