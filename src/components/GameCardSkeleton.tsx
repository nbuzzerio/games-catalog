const GameCardSkeleton = () => {
  return (
    <div className="aspect-square w-full overflow-hidden rounded-md bg-stone-700 pb-3 transition-all duration-300 hover:scale-[.98]">
      <div className="rounded-4 bg-secondary h-full w-full cursor-pointer flex-col justify-between overflow-hidden">
        <div className="oscillate h-2/3 bg-[#222]" />
        <div className="card-body oscillate flex h-1/3 flex-grow-0 flex-col justify-center gap-2 px-3">
          <div className="h-4 w-full bg-[#222]"></div>
          <div className="h-4 w-full bg-[#222]"></div>
          <div className="h-4 w-3/4 bg-[#222]"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
