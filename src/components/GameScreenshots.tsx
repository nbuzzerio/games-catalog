import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return null;
  if (!data?.results?.length || data?.results?.length < 1) return null;

  if (error) throw error;

  return (
    <section className="p-1 p-md-5 screenshots">
      {data.results.map((img) => (
        <img
          key={img.id}
          src={img.image}
          width={img.width}
          height={img.height}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ))}
    </section>
  );
};

export default GameScreenshots;
