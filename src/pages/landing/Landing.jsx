/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Trainer } from "containers/trainer";
import { VersionSelector } from "containers/versionSelector";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { LandingWrapper } from "./Landing.styles";

export const Landing = () => {
    const [version, setVersion] = useState(parseInt(useParams().version) - 1);

    return (
        <LandingWrapper>
            <VersionSelector
                version={version}
                onChange={(version) => setVersion(version)}
            />
            <Trainer version={version} />
        </LandingWrapper>
    );
};