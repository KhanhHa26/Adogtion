import { useState } from "react";
import adoptMe from "../assets/images/adopt-me.png";
import Select from "react-select";
import { Form, useSubmit, Link } from "react-router-dom";
import { useFindADogContext } from "../pages/FindADog";

const FindADogSearch = () => {
  const submit = useSubmit();
  const { searchValues } = useFindADogContext();
  const { location, age, breed } = searchValues;

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    submit(form); //submit the form, update the URL, and use loader to fetch data
  };

  return (
    <div className="find-a-dog-container">
      <div className="find-a-dog-content">
        <div className="find-a-dog-left-container">
          {" "}
          <h2>Ready to Adopt a Dog?</h2>
          {/* trigger handleSearch when we submit the form */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="input-group">
              <label htmlFor="location">Location</label>
              <input type="text" name="location" defaultValue={location} />
            </div>
            <div className="input-group">
              <label htmlFor="age">Age</label>
              <input type="text" name="age" defaultValue={age} />
            </div>
            <div className="input-group">
              <label htmlFor="breed">Breed</label>
              <input type="text" name="breed" defaultValue={breed} />
            </div>
            <button type="submit" className="get-started-button">
              <i className="fas fa-search"></i> Search
            </button>
          </form>
        </div>
        <div className="find-a-dog-right-container">
          <img src={adoptMe} alt="Adopt Me" />
        </div>
      </div>
    </div>
  );
};
export default FindADogSearch;
