/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Selector } from "components/selector";

export const Terrain = ({ fieldStatus, onChange }) => {
    const terrains =
        fieldStatus.generation >= 6
            ? [
                  { label: "Default Terrain", value: "default" },
                  { label: "Electric Terrain", value: "electric" },
                  { label: "Grassy Terrain", value: "grassy" },
                  { label: "Misty Terrain", value: "misty" },
                  { label: "Psychic Terrain", value: "psychic" },
              ]
            : [];

    return (
        <Selector
            contentType="text"
            items={terrains}
            onClick={onChange}
            selectedIndex={fieldStatus.terrain}
            width="4rem"
            height="2rem"
            borderRadius="0.5rem"
        />
    );
};
