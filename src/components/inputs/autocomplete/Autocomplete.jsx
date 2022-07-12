/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { StyledAutocomplete } from "./Autocomplete.styles";

export const Autocomplete = ({ id, data, onChange, centered }) => (
    <StyledAutocomplete
        className="react-select-container"
        classNamePrefix="react-select"
        components={{
            IndicatorSeparator: () => null,
        }}
        options={data}
        // menuPlacement="auto"
        value={data[id - 1]}
        onChange={(e) => onChange(e.value)}
    />
);
