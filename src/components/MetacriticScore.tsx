interface Props {
  score: number;
}

const MetacriticScore = ({ score = 15 }: Props) => {
  return (
    <div
      className={`w-12 whitespace-nowrap rounded-md px-3 py-1 text-center font-extrabold text-white shadow-2xl ${
        score < 60
          ? "bg-[#d10808cc]"
          : score < 75
            ? "bg-[#7E7923]"
            : "bg-[#21d10866]"
      }`}
    >
      {score ? score : "-"}
    </div>
  );
};

export default MetacriticScore;
