/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { ContainerWrapper, ContainerHeader } from "assets/styles/Common.styles";
import { BattleType } from "./BattleType";
import { SharedStatus } from "./SharedStatus";
import { Terrain } from "./Terrain";
import { UserStatus } from "./UserStatus";
import { Weather } from "./Weather";

export const Battlefield = ({ generation, fieldStatus, onChange }) => {
    return (
        <ContainerWrapper>
            <ContainerHeader>Battlefield</ContainerHeader>
            {generation >= 3 ? <BattleType /> : null}
            {generation >= 6 ? <Terrain /> : null}
            {generation >= 2 ? <Weather /> : null}
            {generation >= 4 ? <SharedStatus /> : null}
            <UserStatus />
        </ContainerWrapper>
    );
};
