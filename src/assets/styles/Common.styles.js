import styled from "@emotion/styled";

export const CenteredFlexbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerWrapper = styled.div`
    border-radius: 1rem;
    width: ${({ width }) => (width ? width : "auto")};
    background-color: ${({ theme }) => theme.background.light};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const ContainerHeader = styled(CenteredFlexbox)`
    padding: 1rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.background.title};
    color: ${({ theme }) => theme.typography.inverted};
    font-weight: 800;
    font-size: 1.125rem;
`;
