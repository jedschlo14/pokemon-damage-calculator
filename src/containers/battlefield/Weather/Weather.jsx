/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Selector } from "components/selector";

export const Weather = ({ fieldStatus, onChange }) => {
    const gen2Weather = [
        { label: "None", value: "none" },
        { label: "Sun", value: "sun" },
        { label: "Rain", value: "rain" },
        { label: "Sand", value: "sand" },
    ];
    const gen3Weather = [{ label: "Hail", value: "hail" }];
    const gen6Weather = [
        { label: "Harsh Sunshine", value: "harshSunshine" },
        { label: "Heavy Rain", value: "heavyRain" },
        { label: "Strong Winds", value: "strongWinds" },
    ];

    const weather = [
        ...(fieldStatus.generation >= 2 ? gen2Weather : []),
        ...(fieldStatus.generation >= 3 ? gen3Weather : []),
        ...(fieldStatus.generation >= 6 ? gen6Weather : []),
    ];

    return (
        <Selector
            contentType="text"
            items={weather}
            onClick={onChange}
            selectedIndex={fieldStatus.weather}
            width="4rem"
            height="2rem"
            borderRadius="0.5rem"
        />
    );
};
