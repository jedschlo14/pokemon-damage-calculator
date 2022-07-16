/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { StyledAutocomplete } from "./Autocomplete.styles";

export const Autocomplete = ({ id, data, onChange, centered, header }) => {
    // console.log(id, data, data[id]);
    return (
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
            value={data.find((item) => item.value === id)}
            onChange={(e) => onChange(e.value)}
        />
    );
};
