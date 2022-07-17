/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { NumberEntryInput } from "./NumberEntry.styles";
import { CenteredFlexbox } from "assets/styles/Common.styles";

export const NumberEntry = ({
    value,
    min,
    max,
    onChange,
    color,
    allowDecimal,
}) => {
    const updateValue = (value) => {
        if (value === "" || isNaN(value) || value < min) onChange(min);
        else if (value > max) onChange(max);
        else onChange(value);
    };

    const handleChange = (value) => {
        if (allowDecimal) {
            const parsedValue = value
                .replaceAll(/[^0-9.]/g, "") // only allow numbers and decimals
                .replace(/^0+(?!\.)/, "") // remove leading zeros (allow leading zero if there is a decimal)
                .replace(/(?<=\.[0-9]{2}).*/, ""); // allow no more than 2 decimal places
            if (/^[0-9]*\.?[0-9]*$/.test(parsedValue)) updateValue(parsedValue); // ensure there's only one decimal point
        } else {
            const parsedValue = parseInt(
                value
                    .replaceAll(/[^0-9]/g, "") // only allow numbers
                    .replace(/^0+/, "") // remove leading zeros
            );
            updateValue(parsedValue);
        }
    };

    return (
        <CenteredFlexbox>
            <NumberEntryInput
                color={color}
                value={value}
                placeholder="-"
                onChange={(e) => handleChange(e.target.value)}
            />
        </CenteredFlexbox>
    );
};
