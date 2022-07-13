import styled from "@emotion/styled";
import { CenteredFlexbox } from "assets/styles/Common.styles";

export const TrainerWrapper = styled.div`
    flex-direction: column;
    width: 34rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.background.light};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const TrainerHeader = styled(CenteredFlexbox)`
    padding: 1rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.background.title};
    color: ${({ theme }) => theme.typography.inverted};
    font-weight: 800;
    font-size: 1.125rem;
`;
