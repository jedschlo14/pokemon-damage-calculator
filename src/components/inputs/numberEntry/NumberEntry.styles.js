import styled from "@emotion/styled";

export const NumberEntryInput = styled.input`
    width: 3.5rem;
    // height: 1.5rem;
    height: 26px;
    background: ${({ theme }) => theme.background.entry};
    border-radius: 0.75rem;
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    text-align: center;
    font-weight: 600;
    font-size: ${({ value }) => (value > 999 ? `0.75rem` : `default`)};
    color: ${({ color, theme }) =>
        color ? theme.typography.special : `default`};
    border: none;
    padding: none;
`;
