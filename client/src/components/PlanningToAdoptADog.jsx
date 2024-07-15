import React from "react";
import footPrint from "../assets/images/footPrint.png";

const PlanningToAdoptADog = () => {
  return (
    <div className="planning-container">
      <div className="planning-title">
        <p>Planning to Adopt a Dog?</p>
        <img src={footPrint} alt="Footprint" />
      </div>
      <div className="planning-section">
        <h2>The Joy of Dog Adoption</h2>
        <p>
          Bringing a dog into your life can be an incredible experience, not
          just for you but for the furry friend you welcome into your home.
          There's a special kind of magic that comes with adopting a companion
          dog
        </p>
        <h2>A Guide to Dog Adoption</h2>
        <p>
          Are you considering adding a new dog to your family? Dog adoption is a
          wonderful option to consider. The journey of finding the ideal
          companion involves careful thought, research, and planning, but the
          rewards are immeasurable.
        </p>
        <h2>Healing Power of Dogs</h2>

        <p>
          Dogs have an extraordinary ability to touch our lives in profound
          ways, offering not only companionship but also a therapeutic bond that
          can positively impact our physical, mental, and emotional well-being
        </p>
      </div>
    </div>
  );
};
export default PlanningToAdoptADog;
