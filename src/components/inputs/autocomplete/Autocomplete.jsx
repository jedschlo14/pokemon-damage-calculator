/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { StyledAutocomplete } from "./Autocomplete.styles";

export const Autocomplete = ({
    id,
    data,
    onChange,
    centered,
    width,
    header,
}) => {
    return (
        <StyledAutocomplete
            header={header}
            centered={centered}
            width={width}
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
