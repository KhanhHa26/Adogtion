import { useNavigation } from "react-router-dom";
const DogInterestForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <h2>Dog Interest Form</h2>
      <form>
        <div className="input-box">
          <label>Name</label>
          <input name="name" type="text" placeholder="Name" />
        </div>

        <div className="input-box">
          <label>Breed</label>
          <input name="breed" type="text" placeholder="Breed" />
        </div>

        <div className="input-box">
          <label>Location</label>
          <input name="location" type="text" placeholder="Location" />
        </div>

        <div className="input-box">
          <label>Living Condition</label>
          <textarea name="description" rows="4"></textarea>
        </div>

        <div className="input-box">
          <label>Email:</label>
          <input name="email" type="text" placeholder="Email" />
        </div>

        <div className="input-box">
          <label>Phone Number:</label>
          <input name="phoneNumber" type="tel" placeholder="000-000-0000" />
        </div>

        <button type="submit" className="cta-button" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
export default DogInterestForm;
