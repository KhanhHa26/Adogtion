import React from "react";
import dogUnderHomeLeft from "../assets/images/dog-under-home-left.png";
import dogUnderHomeRight from "../assets/images/dog-under-home-right.png";

const CardUnderHome = () => {
  return (
    <div className="card-under-home-container">
      <div className="left-pic">
        <img src={dogUnderHomeLeft} alt="Dog Under Home Left" />
      </div>
      <div className="left-para">
        <p>1.2k+ furry friends living their best life</p>
      </div>
      <div className="right-pic">
        <img src={dogUnderHomeRight} alt="Dog Under Home Right" />
      </div>
      <div className="right-para">
        <p>
          Adoption makes it easier to match the dog to the right family. With a
          focus on no dogs left behind, we bring about safety and home to our
          furry friends.
        </p>
      </div>
    </div>
  );
};

export default CardUnderHome;
