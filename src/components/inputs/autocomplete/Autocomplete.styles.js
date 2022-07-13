import ReactSelect from "react-select";
import styled from "@emotion/styled";

export const StyledAutocomplete = styled(ReactSelect)`
    .react-select__control {
        box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
        border-radius: 0.5rem;
        border: none;
        min-height: 0;
        background-color: ${({ theme }) => theme.button.default};
        height: ${({ header }) => (header ? "2.25rem" : "1.75rem")};
        justify-content: center;
        width: ${({ centered }) => (centered ? "4rem" : "100%")};
    }

    .react-select__control--is-focused {
        background-color: ${({ theme }) => theme.button.selected};
    }

    .react-select__indicators {
        height: ${({ header }) => (header ? "2.25rem" : "1.75rem")};
    }

    .react-select__value-container {
        padding: 0 0.5rem;
    }

    .react-select__single-value {
        text-align: ${({ centered }) => (centered ? "center" : "left")};
    }
`;
