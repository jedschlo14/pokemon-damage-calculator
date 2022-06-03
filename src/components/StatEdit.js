import StatEdit from "./StatRow";
import stats from "../data/Stats";

export default function Stats(props) {
    return (
        <>
            <div></div>
            <div className="flex justify-center items-center font-extrabold">
                Base
            </div>
            {props.version < 2 ? (
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
                    <StatEdit
                        key={index}
                        version={props.version}
                        statLabel={stat.label}
                        statValue={stat.value}
                        pokemon={props.pokemon}
                        changeStat={(value, stat, type) =>
                            props.changeStat(value, stat, type)
                        }
                    />
                );
            })}
        </>
    );
}
