/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { StatRow } from "components/stats/statRow";
import { stats } from "data";
import { Fragment } from "react";
import { StatTitle } from "./Stats.styles";

export const Stats = ({ pokemon, version, changeStat }) => {
    return (
        <Fragment>
            <div></div>
            <StatTitle>Base</StatTitle>
            <StatTitle>{version < 2 ? "DVs" : "IVs"}</StatTitle>
            <StatTitle>{version < 2 ? "statEXP" : "EVs"}</StatTitle>
            <StatTitle>Final</StatTitle>
            <StatTitle>Stage</StatTitle>
            {stats.map((stat, index) => {
                return (
                    <StatRow
                        key={index}
                        version={version}
                        statLabel={stat.label}
                        statValue={stat.value}
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
