import styled from "@emotion/styled";

const ProgressBar = styled.div`
    height: 0.5rem;
    border-radius: 1rem;
`;

export const ProgressBarEmpty = styled(ProgressBar)`
    width: 100%;
    background-color: ${({ theme }) => theme.progressBar.empty};
`;

export const ProgressBarFill = styled(ProgressBar)`
    width: ${({ width }) => width};
    background-color: ${({ theme }) => theme.progressBar.fill};
`;
