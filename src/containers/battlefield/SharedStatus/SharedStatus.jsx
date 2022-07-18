/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Toggle } from "components/toggle";

export const SharedStatus = ({ fieldStatus, onChange }) => {
    return (
        <Toggle
            item={"Gravity"}
            isSelected={fieldStatus.gravity}
            toggle={onChange}
            width="4rem"
            height="2rem"
            borderRadius="0.5rem"
        />
    );
};
