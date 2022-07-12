/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { MultiSelect } from "./Selector.styles";

export const Selector = ({ id, data, onChange, centered }) => (
    <MultiSelect
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
