import { useMemo, useState } from "react";

const GameDescription = ({ desc }: { desc: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = useMemo<string[]>(() => desc.split(" "), [desc]);
  const collapsedText = useMemo<string>(
    () => words.slice(0, 50).join(" "),
    [words],
  );

  return (
    <div className="max-w-screen-lg">
      <p className={`text-xl ${isExpanded ? "" : "ellipsis"}`}>
        {isExpanded || words.length <= 50 ? desc : collapsedText + "..."}
      </p>
      {words.length > 50 && (
        <button
          className="my-3 rounded-lg border border-light px-4 py-2 capitalize transition-all duration-300 hover:bg-light hover:text-dark active:scale-105"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          show {isExpanded ? "less" : "more"}
        </button>
      )}
    </div>
  );
};

export default GameDescription;
