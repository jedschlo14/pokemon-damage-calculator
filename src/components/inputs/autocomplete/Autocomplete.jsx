/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { components } from "react-select";
import { StyledAutocomplete } from "./Autocomplete.styles";

export const Autocomplete = ({ id, data, onChange, centered, header }) => (
    <StyledAutocomplete
        header={header}
        centered={centered}
        isSearchable={!centered}
        menuPlacement="auto"
        className="react-select-container"
        classNamePrefix="react-select"
        components={
            centered
                ? {
                      IndicatorSeparator: () => null,
                      IndicatorsContainer: () => null,
                  }
                : {
                      IndicatorSeparator: () => null,
                  }
        }
        options={data}
        value={data[id - 1]}
        onChange={(e) => onChange(e.value)}
    />
);
