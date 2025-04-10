import React, { useRef, useEffect } from "react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGameQueryStore from "../store";
import { useTheme } from "./ThemeContext/ThemeContext";

import cachedGameData from "../data/cachedGameData";

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

  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const firstLoad = !hasMounted.current;

  const gameData = firstLoad ? cachedGameData : data;

  return (
    <>
      {error && (
        <div
          className="fade show col container my-5 text-center text-4xl uppercase text-red-600"
          role="alert"
        >
          {error.message}
        </div>
      )}
      {!error && (
        <div className="flex flex-col gap-3 px-2">
          <ul className="mx-auto grid w-full grid-cols-1 gap-3 py-4 md:grid-cols-2 lg:grid-cols-3">
            {isLoading && !firstLoad ? (
              <>
                {skeletons.slice(1).map((skeleton) => (
                  <GameCardSkeleton key={skeleton} />
                ))}
              </>
            ) : (
              gameData?.pages.map((page, pageIndex) => (
                <React.Fragment key={pageIndex}>
                  {page.results.map((game) => {
                    return <GameCard key={game.id} game={game} />;
                  })}
                </React.Fragment>
              ))
            )}
          </ul>

          {hasNextPage && (
            <button
              className={`rounded-md border p-1 ${
                theme
                  ? "border-light bg-accent-dark text-light"
                  : "border-light bg-accent-light text-dark"
              }`}
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
