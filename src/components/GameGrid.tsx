import React from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGameQueryStore from "../store";

const GameGrid = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && (
        <div
          className="alert alert-danger alert-dismissible text-center fw-bolder text-danger text-uppercase my-5 container fade show col"
          role="alert"
        >
          {error.message}
          <button
            className="btn-close"
            aria-label="close"
            data-bs-dismiss="alert"
          ></button>
        </div>
      )}
      {!error && (
        <div className="row col flex-column">
          <ul className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 col mx-auto">
            {isLoading &&
              skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

            {data?.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.results.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </React.Fragment>
            ))}
          </ul>
          {hasNextPage && (
            <button className="btn btn-dark" onClick={() => fetchNextPage()}>
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default GameGrid;
