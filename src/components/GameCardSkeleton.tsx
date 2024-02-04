const GameCardSkeleton = () => {
  return (
    <div className="gamecard col-12 col-md-6 col-lg-4 p-4">
      <div className="card w-100 h-100 flex-column justify-content-between rounded-4 overflow-hidden cursor-pointer bg-secondary">
        <div
          className="img-cover oscillate"
          style={{ background: "#222", height: "66%" }}
        />
        <div
          className="card-body pt-0 flex-grow-0 d-flex flex-column justify-content-center gap-2 oscillate "
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
