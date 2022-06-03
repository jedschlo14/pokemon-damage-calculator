import { Link } from "react-router-dom";

const versions = ["RBY", "GSC", "ADV", "DPP", "BW", "XY", "SM", "SS"];

export default function VersionSelector(props) {
    return (
        <div>
            <div className="w-full bg-light shadow-md rounded-2xl">
                <div className="bg-title p-4 flex justify-center items-center rounded-2xl">
                    <div className="text-white font-extrabold text-lg">
                        Select Version
                    </div>
                </div>
                <div className="flex justify-center gap-4 p-4 font-bold">
                    {versions.map((name, index) => {
                        return (
                            <Link
                                className={
                                    "w-16 h-8 rounded-lg flex justify-center items-center " +
                                    (props.version === index
                                        ? "bg-button-selected shadow-inner cursor-default"
                                        : "hover:bg-button-hover bg-white shadow-md cursor-pointer duration-200")
                                }
                                key={index}
                                onClick={() => props.onChange(index)}
                                to={`/${index + 1}`}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
