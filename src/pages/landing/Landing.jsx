/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Trainer } from "containers/trainer";
import { GenerationSelector } from "containers/generationSelector";
import { Battlefield } from "containers/battlefield";
import { useState } from "react";
import { LandingWrapper } from "./Landing.styles";

export const Landing = () => {
    const [generation, setGeneration] = useState(4);
    const [fieldStatus, setFieldStatus] = useState();

    return (
        <LandingWrapper>
            <GenerationSelector
                generation={generation - 1}
                onChange={(generation) => setGeneration(generation + 1)}
            />
            <Battlefield
                generation={generation}
                fieldStatus={fieldStatus}
                onChange={(fieldStatus) => setFieldStatus(fieldStatus)}
            />
            <Trainer generation={generation} />
        </LandingWrapper>
    );
};
