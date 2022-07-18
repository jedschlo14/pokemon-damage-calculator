/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { NumberEntry } from "components/inputs/numberEntry";
import { ProgressBar } from "./progressBar";
import { HealthEditWrapper, HealthWrapper } from "./Health.styles";
import { statuses } from "data";
import { Autocomplete } from "components/inputs/autocomplete";

export const Health = ({ pokemon, changeStat, changeAttribute }) => {
    return (
        <HealthWrapper>
            <HealthEditWrapper>
                <div>HP:</div>
                <NumberEntry
                    min={0}
                    max={pokemon.stats.hp.final}
                    value={pokemon.stats.hp.current}
                    onChange={(e) => changeStat(e, "hp", "current")}
                />
                <div>/</div>
                <div>{pokemon.stats.hp.final}</div>
                <div>(</div>
                <NumberEntry
                    allowDecimal
                    min={0}
                    max={100}
                    value={pokemon.stats.hp.currentPct}
                    onChange={(e) => changeStat(e, "hp", "currentPct")}
                />
                <div>%)</div>
            </HealthEditWrapper>
            <Autocomplete
                width="12rem"
                id={pokemon.status}
                data={statuses}
                onChange={(id) => changeAttribute("status", id)}
            />
            <ProgressBar percent={parseFloat(pokemon.stats.hp.currentPct)} />
        </HealthWrapper>
    );
};
