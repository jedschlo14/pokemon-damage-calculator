import { NumberEntryInput, NumberEntryWrapper } from "./NumberEntry.styles";
import { CenteredFlexbox } from "assets/styles/Common.styles";

export const NumberEntry = ({ value, min, max, onChange, color }) => {
    const handleChange = (newValue) => {
        if (newValue === "" || newValue < min) onChange(min);
        else if (newValue > max) newValue = onChange(max);
        else onChange(parseInt(newValue));
    };

    return (
        <CenteredFlexbox>
            <NumberEntryInput
                color={color}
                value={value}
                placeholder="-"
                onChange={(e) =>
                    handleChange(e.target.value.replace(/\D/g, ""))
                }
            />
        </CenteredFlexbox>
    );
};
