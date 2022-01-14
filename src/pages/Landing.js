import Trainer from "../components/Trainer";
import VersionSelector from "../components/VersionSelector";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Landing() {
  const [version, setVersion] = useState(parseInt(useParams().version) - 1);

  return (
    <div className="absolute overflow-auto w-full h-full bg-dark flex justify-center items-center">
      <div>
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
    </div>
  );
}
