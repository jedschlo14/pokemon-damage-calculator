/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ProgressBarEmpty, ProgressBarFill } from "./ProgressBar.styles";

export const ProgressBar = ({ percent }) => {
    return (
        <ProgressBarEmpty>
            <ProgressBarFill width={percent + "%"} />
        </ProgressBarEmpty>
    );
};
