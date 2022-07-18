/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ContainerWrapper, ContainerHeader } from "assets/styles/Common.styles";
import { BattleType } from "./BattleType";
import { SharedStatus } from "./SharedStatus";
import { Terrain } from "./Terrain";
import { UserStatus } from "./UserStatus";
import { Weather } from "./Weather";

export const Battlefield = ({ fieldStatus, onChange }) => {
    return (
        <ContainerWrapper>
            <ContainerHeader>Battlefield</ContainerHeader>
            <BattleType
                fieldStatus={fieldStatus}
                onChange={(battleType) =>
                    onChange({ ...fieldStatus, battleType })
                }
            />
            <Terrain
                fieldStatus={fieldStatus}
                onChange={(terrain) => onChange({ ...fieldStatus, terrain })}
            />
            <Weather
                fieldStatus={fieldStatus}
                onChange={(weather) => onChange({ ...fieldStatus, weather })}
            />
            <SharedStatus
                fieldStatus={fieldStatus}
                onChange={(gravity) => onChange({ ...fieldStatus, gravity })}
            />
            <UserStatus />
        </ContainerWrapper>
    );
};
