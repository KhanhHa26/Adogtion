import React, { useState } from "react";
import footPrint from "../assets/images/footPrint.png";
import DogInterestForm from "./DogInterestForm";
import Modal from "./Modal";

const DogInfo = ({ _id, name, breed, age, location, description, image }) => {
  const [interestForm, setInterestForm] = useState(false);

  const toggleInterestForm = () => {
    setInterestForm(!interestForm);
  };

  return (
    <div className="dog-card">
      <img src={image} alt="Dog Image" />
      <h1>{name}</h1>
      <h2>{breed}</h2>
      <p>{age}</p>
      <p>{location}</p>
      <p>{description}</p>
      <button
        type="button"
        className="show-interest-button"
        onClick={toggleInterestForm}
      >
        Show Interest <img src={footPrint} alt="Footprint" />
      </button>
      {interestForm && (
        <Modal onClose={toggleInterestForm}>
          <DogInterestForm />
        </Modal>
      )}
    </div>
  );
};

export default DogInfo;
