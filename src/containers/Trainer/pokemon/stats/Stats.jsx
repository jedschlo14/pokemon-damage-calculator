/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { StatRow } from "./statRow";
import { stats } from "data";
import { Fragment } from "react";
import { StatTitle } from "./Stats.styles";

export const Stats = ({ pokemon, fieldStatus, changeStat }) => {
    return (
        <Fragment>
            <div></div>
            <StatTitle>Base</StatTitle>
            <StatTitle>{fieldStatus.generation <= 2 ? "DVs" : "IVs"}</StatTitle>
            <StatTitle>
                {fieldStatus.generation <= 2 ? "statEXP" : "EVs"}
            </StatTitle>
            <StatTitle>Final</StatTitle>
            <StatTitle>Stage</StatTitle>
            {stats.map((stat, index) => {
                return (
                    <StatRow
                        key={index}
                        fieldStatus={fieldStatus}
                        statLabel={stat.label}
                        stat={stat.value}
                        pokemon={pokemon}
                        changeStat={(value, stat, type) =>
                            changeStat(value, stat, type)
                        }
                    />
                );
            })}
        </Fragment>
    );
};
