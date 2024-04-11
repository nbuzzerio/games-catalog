import { useMemo, useState } from "react";
import { useTheme } from "./ThemeContext/ThemeContext";

const GameDescription = ({ desc }: { desc: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

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
          className={`my-3 rounded-lg border  px-4 py-2 capitalize transition-all duration-300 active:scale-105 ${theme ? "border-light hover:bg-light hover:text-dark" : "border-dark hover:bg-dark hover:text-light "}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          show {isExpanded ? "less" : "more"}
        </button>
      )}
    </div>
  );
};

export default GameDescription;
