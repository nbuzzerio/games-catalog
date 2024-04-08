interface Props {
  score: number;
}

const MetacriticScore = ({ score = 15 }: Props) => {
  return (
    <div
      className={`rounded-3 w-12 px-3 py-1 text-center shadow ${
        score < 60
          ? "text-bg-danger"
          : score < 75
            ? "text-bg-warning"
            : "text-bg-success"
      }`}
    >
      {score ? score : "-"}
    </div>
  );
};

export default MetacriticScore;
