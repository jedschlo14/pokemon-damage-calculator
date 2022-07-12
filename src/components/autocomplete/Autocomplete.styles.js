import ReactSelect from "react-select";
import styled from "@emotion/styled";

export const StyledAutocomplete = styled(ReactSelect)`
    &.react-select-container {
    }

    .react-select__control {
        box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
        border-radius: 1rem;
        border: none;
        background-color: ${({ theme }) => theme.button.default};
        min-height: 0;
        display: flex;
        align-items: center;
    }

    .react-select__control--is-focused {
        background-color: ${({ theme }) => theme.button.selected};
    }

    .react-select__value-container {
        display: flex;
        align-items: center;
        height: 1.75rem;
    }

    .react-select__value-container {
        padding: 0 0.5rem;
        flex-wrap: nowrap;
    }

    .react-select__indicators {
        height: 1.75rem;
    }

    &.Select--multi {
        .Select-value {
            display: inline-flex;
            align-items: center;
        }
    }

    & .Select-placeholder {
        font-size: smaller;
    }
`;
