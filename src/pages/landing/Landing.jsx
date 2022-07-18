/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Trainer } from "containers/trainer";
import { GenerationSelector } from "containers/generationSelector";
import { Battlefield } from "containers/battlefield";
import { useState } from "react";
import { LandingWrapper } from "./Landing.styles";

export const Landing = () => {
    const [fieldStatus, setFieldStatus] = useState({
        generation: 4,
        battleType: "single",
    });

    console.log(fieldStatus);

    return (
        <LandingWrapper>
            <GenerationSelector
                generation={fieldStatus.generation}
                onChange={(generation) =>
                    setFieldStatus({ ...fieldStatus, generation })
                }
            />
            <Battlefield
                fieldStatus={fieldStatus}
                onChange={(fieldStatus) => setFieldStatus(fieldStatus)}
            />
            <Trainer fieldStatus={fieldStatus} />
        </LandingWrapper>
    );
};
