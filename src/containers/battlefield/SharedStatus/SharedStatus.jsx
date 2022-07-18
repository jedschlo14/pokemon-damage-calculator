/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Selector } from "components/selector";

export const SharedStatus = ({ fieldStatus, onChange }) => {
    const gen4statuses = [{ label: "Gravity", value: "gravity" }];
    const gen5statuses = [
        { label: "Magic Room", value: "magicRoom" },
        { label: "Wonder Room", value: "wonderRoom" },
    ];

    const statuses = [
        ...(fieldStatus.generation >= 5 ? gen5statuses : []),
        ...(fieldStatus.generation >= 4 ? gen4statuses : []),
    ];

    return (
        <Selector
            contentType="text"
            items={statuses}
            onClick={onChange}
            selected={fieldStatus.sharedStatus}
            width="4rem"
            height="2rem"
            borderRadius="0.5rem"
            multi
        />
    );
};
