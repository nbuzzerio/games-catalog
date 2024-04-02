import { useMemo, useState } from "react";

const GameDescription = ({ desc }: { desc: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = useMemo<string[]>(() => desc.split(" "), [desc]);
  const collapsedText = useMemo<string>(
    () => words.slice(0, 50).join(" "),
    [words],
  );

  return (
    <div className="" style={{ maxWidth: "1024px" }}>
      <p className={`fs-5 ${isExpanded ? "" : "ellipsis"}`}>
        {isExpanded ? desc : collapsedText + "..."}
      </p>
      <button
        className="btn btn-dark"
        style={{ width: "150px" }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        show {isExpanded ? "less" : "more"}
      </button>
    </div>
  );
};

export default GameDescription;
