import DogInfo from "./DogInfo";
import { useFindADogContext } from "../pages/FindADog";
import { useState } from "react";

const FindADogDisplay = () => {
  const { data } = useFindADogContext();
  const { dogs } = data;
  const approveDogs = dogs.filter((dog) => dog.status === "approved");
  if (dogs.length === 0) {
    return <h2>There are no dogs posted...</h2>;
  }
  return (
    <div className="display-dogs-container">
      <div className="display-dogs-title">
        <h1>Meet Dogs</h1>
        <h2>Check out these furry friends looking for forever homes.</h2>
      </div>
      <div className="display-dogs-info">
        {approveDogs.map((dog) => {
          return <DogInfo key={dog._id} {...dog} />;
        })}
      </div>
    </div>
  );
};
export default FindADogDisplay;
