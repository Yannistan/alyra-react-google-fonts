import React from "react";
import Recent from "./Recent";
import Popular from "./Popular";
import Trending from "./Trending";

const Fonts = () => {
  return (
    <div className="col-lg-9">
      <section className="mb-5">
        <hr></hr>
        <h2>
          <span className="badge bg-danger badge-lg" id="recent">
            Les plus récentes
          </span>
        </h2>
        <Recent />
      </section>
      <section className="mb-5">
        <hr></hr>
        <h2>
          <span className="badge bg-danger" id="popular">
            Les plus populaires
          </span>
        </h2>
        <Popular />
      </section>
      <section className="mb-5">
        <hr></hr>
        <h2>
          <span className="badge bg-danger" id="trendy">
            Tendance
          </span>
        </h2>
        <Trending />
      </section>
    </div>
  );
};

export default Fonts;