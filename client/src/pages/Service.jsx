import React from "react";
import serviceLeft from "../assets/images/service-left.png";
import serviceLeft2 from "../assets/images/service-left2.png";
import { Link } from "react-router-dom";
import PostADog from "../components/PostADog";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-container-left">
        <h2>Adopt a Dog</h2>
        <img src={serviceLeft} alt="Man Holding a Dog" />
        <img src={serviceLeft2} alt="Girl Holding a Dog" />
        <p className="service-second-para">
          Welcome to our dog adoption program! You are on the right path of
          bringing a joyful companion into your life
        </p>
        <div className="benefits">
          <h3>Benefits of Dog adoption</h3>
          <ul>
            <li>Provide a loving home to dogs in need</li>
            <li>Experience the unconditional love of a dog</li>
            <li>Create lasting memories and cherished moments</li>
          </ul>
        </div>
        <div className="adoption-process">
          <h3>Adoption Process</h3>
          <ul>
            <li>Fill out the adoption application</li>
            <li>Meet potential dogs in person</li>
            <li>Complete the necessary paperwork</li>
          </ul>
        </div>
        <div className="responsibilities">
          <h3>Responsibilities</h3>
          <ul>
            Adopting a dog comes with great responsibilities, including feeding,
            grooming, regular exercise, and medicare care. Only adopt when you
            know that you can fulfill all the responsibilities.
          </ul>
        </div>
        <Link to="/dogs" className="btn-find-perfect-dog">
          Find Your Perfect Dog
        </Link>
      </div>
      <PostADog />
    </div>
  );
};

export default Service;
