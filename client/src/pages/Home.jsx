import { Link } from "react-router-dom";

//images
import girlHoldingADog from "../assets/images/girl-holding-dog.png";
import dogTitle from "../assets/images/dog-title.png";
import footPrint from "../assets/images/footPrint.png";

//components
import CardUnderHome from "../components/CardUnderHome";
import PlanningToAdoptADog from "../components/PlanningToAdoptADog";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-container-left">
          <div>
            <p className="home-title">
              <div className="home-title-with-png">
                <p>Your Dogs</p>
                <img src={dogTitle} alt="dog next to title" />
              </div>
              <p> Are Our</p>
              <p>Happiness</p>
            </p>
            <p className="second-paragraph">
              We are thrilled to welcome you! Join Adogtion in creating warm,
              loving homes for our furry friends. Remember, every dog deserves a
              place to call home – let’s ensure no pup is left behind!
            </p>
          </div>
          <div className="home-btn">
            <Link to="/login" className="btn-link">
              Login
              <img src={footPrint} alt="Footprint" />
            </Link>
            <Link to="/register" className="btn-link">
              <p>
                Register
                <img src={footPrint} alt="Footprint" />
              </p>
            </Link>
          </div>
        </div>
        <div className="home-container-right">
          <img src={girlHoldingADog} alt="girl-holding-a-dog" />
        </div>
      </div>
      <CardUnderHome />
      <PlanningToAdoptADog />
    </>
  );
};
export default Home;
