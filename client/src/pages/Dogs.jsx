import React, { useEffect, useState } from "react";
import footPrint from "../assets/images/footPrint.png";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const apiKey = import.meta.env.API_KEY;

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds", {
          headers: {
            "x-api-key": apiKey,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.error("Error fetching the dogs data:", error);
      }
    };

    fetchDogs();
  }, [apiKey]);

  return (
    <div className="dogs-container">
      <div className="dogs-title">
        <h2>Explore Different Dog Breeds</h2>
      </div>
      {dogs.map((dog) => (
        <div key={dog.id} className="dog-card">
          <img
            src={
              dog.reference_image_id
                ? `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`
                : "/path/to/fallback-image.png"
            }
            alt={dog.name}
          />{" "}
          <h1>{dog.name}</h1>
          <p>
            {dog.breed_group
              ? `Breed Group: ${dog.breed_group}`
              : `Breed Group: Not Available`}
          </p>
          <p>Life Span: {dog.life_span}</p>
          <p>Temperament: {dog.temperament}</p>
          <p>{dog.origin ? `Origin: ${dog.origin}` : ""}</p>
          <button
            className="show-interest-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `https://en.wikipedia.org/wiki/${dog.name}`;
            }}
          >
            Show Facts <img src={footPrint} alt="Footprint" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dogs;
