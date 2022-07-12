/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { CenteredFlexbox } from "assets/styles/Common.styles";
import { NumberEntry } from "components/inputs/numberEntry";
import { Autocomplete } from "components/inputs/autocomplete";
import { stages, natures } from "data";
import { Fragment } from "react";
import { StatRowTitle } from "./StatRow.styles";

export const StatRow = ({
    version,
    statLabel,
    statValue,
    pokemon,
    changeStat,
}) => {
    const other = (stat) => {
        if (pokemon.stats[statValue][stat] === -1) return "";
        return pokemon.stats[statValue][stat];
    };

    const final = () => {
        const versionOldOrNew = version < 2 ? "old" : "new";
        if (pokemon.stats[statValue].final !== -1)
            return (
                pokemon.stats[statValue].final *
                stages[pokemon.stats[statValue]["stage"] - 1][versionOldOrNew]
            );
        const level = pokemon["level"];
        if (level === 0) return 0;
        const pokemonNature = pokemon["nature"];
        const iv = pokemon.stats[statValue]["iv"];
        const ev = pokemon.stats[statValue]["ev"];
        const bonus = statValue === "hp" ? level + 10 : 5;
        var nature = 1;
        if (natures[pokemonNature - 1]["info"][0] === statValue) nature += 0.1;
        if (natures[pokemonNature - 1]["info"][1] === statValue) nature -= 0.1;
        return Math.floor(
            (Math.floor(
                ((2 * pokemon.stats[statValue]["base"] +
                    iv +
                    Math.floor(ev / 4)) *
                    level) /
                    100
            ) +
                bonus) *
                stages[pokemon.stats[statValue]["stage"] - 1][versionOldOrNew] *
                nature
        );
    };

    return (
        <Fragment>
            <StatRowTitle>{statLabel}</StatRowTitle>
            <CenteredFlexbox>{pokemon.stats[statValue].base}</CenteredFlexbox>
            <NumberEntry
                value={other("iv")}
                min={0}
                max={31}
                onChange={(e) => changeStat(e, statValue, "iv")}
            />
            <NumberEntry
                value={other("ev")}
                min={0}
                max={version < 2 ? 65535 : 255}
                onChange={(e) => changeStat(e, statValue, "ev")}
            />
            <NumberEntry
                value={final()}
                min={0}
                max={2499}
                color={pokemon.stats[statValue].stage === 7 ? 0 : 1}
                onChange={(id) => changeStat(id, statValue, "final")}
            />
            {statValue === "hp" ? (
                <div></div>
            ) : (
                <Autocomplete
                    id={pokemon.stats[statValue].stage}
                    centered
                    data={stages}
                    onChange={(id) => changeStat(id, statValue, "stage")}
                />
            )}
        </Fragment>
    );
};
