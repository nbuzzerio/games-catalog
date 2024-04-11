import React from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGameQueryStore from "../store";
import { useTheme } from "./ThemeContext/ThemeContext";

const GameGrid = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const theme = useTheme();

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
          className="alert alert-danger alert-dismissible fw-bolder text-danger text-uppercase fade show col container my-5 text-center"
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
        <div className="flex flex-col gap-3 px-2">
          <ul className="mx-auto grid w-full grid-cols-1 gap-3 py-4 md:grid-cols-2 lg:grid-cols-3">
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
            <button
              className={`rounded-md border p-1 ${theme ? "border-light bg-accent-dark text-light" : "border-light bg-accent-light text-dark"}`}
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default GameGrid;
