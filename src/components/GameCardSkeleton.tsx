const GameCardSkeleton = () => {
  return (
    <div className="gamecard col-12 col-md-6 col-lg-4 p-4">
      <div className="card w-100 h-100 flex-column justify-content-between rounded-4 bg-secondary cursor-pointer overflow-hidden">
        <div
          className="img-cover oscillate"
          style={{ background: "#222", height: "66%" }}
        />
        <div
          className="card-body d-flex flex-column justify-content-center oscillate flex-grow-0 gap-2 pt-0 "
          style={{ height: "33%" }}
        >
          <div
            className="w-100"
            style={{ background: "#222", height: "15px" }}
          ></div>
          <div
            className="w-100"
            style={{ background: "#222", height: "15px" }}
          ></div>
          <div
            className="w-75"
            style={{ background: "#222", height: "15px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
