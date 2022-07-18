/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Selector } from "components/selector";

export const BattleType = ({ fieldStatus, onChange }) => {
    const battleTypes =
        fieldStatus.generation >= 3
            ? [
                  { label: "Single", value: "single" },
                  { label: "Double", value: "double" },
              ]
            : [];

    return (
        <Selector
            contentType="text"
            items={battleTypes}
            onClick={onChange}
            selectedIndex={fieldStatus.battleType}
            width="4rem"
            height="2rem"
            borderRadius="0.5rem"
        />
    );
};
