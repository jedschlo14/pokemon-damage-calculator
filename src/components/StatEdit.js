import { StatRow } from "components";
import { stats } from "data";

export const StatEdit = ({ pokemon, version, changeStat }) => {
    return (
        <>
            <div></div>
            <div className="flex justify-center items-center font-extrabold">
                Base
            </div>
            {version < 2 ? (
                <>
                    <div className="flex justify-center items-center font-extrabold">
                        DVs
                    </div>
                    <div className="flex justify-center items-center font-extrabold">
                        statEXP
                    </div>
                </>
            ) : (
                <>
                    <div className="flex justify-center items-center font-extrabold">
                        IVs
                    </div>
                    <div className="flex justify-center items-center font-extrabold">
                        EVs
                    </div>
                </>
            )}
            <div className="flex justify-center items-center font-extrabold">
                Final
            </div>
            <div className="flex justify-center items-center font-extrabold">
                Stage
            </div>
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
        </>
    );
};
