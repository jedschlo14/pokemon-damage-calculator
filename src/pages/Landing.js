import { Trainer } from "containers/trainer";
import { VersionSelector } from "containers/VersionSelector";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Landing() {
    const [version, setVersion] = useState(parseInt(useParams().version) - 1);

    return (
        <div className="absolute overflow-auto w-full h-full bg-dark flex flex-col justify-center items-center">
            <div className="flex justify-center">
                <VersionSelector
                    version={version}
                    onChange={(version) => setVersion(version)}
                />
            </div>
            <div className="flex justify-center p-4 gap-4">
                <Trainer version={version} />
            </div>
        </div>
    );
}
