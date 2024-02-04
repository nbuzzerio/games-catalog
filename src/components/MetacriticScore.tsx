interface Props {
  score: number;
}

const MetacriticScore = ({ score = 15 }: Props) => {
  return (
    <div
      className={`rounded-3 p-1 px-3 fs-4  text-center shadow ${
        score < 60
          ? "text-bg-danger"
          : score < 75
          ? "text-bg-warning"
          : "text-bg-success"
      }`}
    >
      {score}
    </div>
  );
};

export default MetacriticScore;
