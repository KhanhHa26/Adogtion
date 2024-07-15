import serviceRight from "../assets/images/service-right.png";
import customFetch from "../utils/customFetch";
import { useOutletContext } from "react-router-dom";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import FormRow from "./FormRow";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/dogs", data);
    toast.success("Dog Posted Successfully");
    return redirect("/service");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const PostADog = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="service-container-right">
      <h2>Post a Dog</h2>
      <img src={serviceRight} alt="Dogs" />

      <Form method="post">
        <div className="input-box">
          <label>Name</label>
          <input name="name" type="text" placeholder="Name" />
        </div>

        <div className="input-box">
          <label>Dog Age</label>
          <select name="age">
            <option>Puppy</option>
            <option>Young</option>
            <option>Adult</option>
            <option>Senior</option>
          </select>
        </div>

        <div className="input-box">
          <label>Breed</label>
          <input name="breed" type="text" placeholder="Breed" />
        </div>

        <div className="input-box">
          <label>Picture</label>
          <input type="text" name="image" placeholder="Enter image URL" />
        </div>

        <div className="input-box">
          <label>Location</label>
          <input name="location" type="text" placeholder="Location" />
        </div>

        <div className="input-box">
          <label>Description / Reason for giving a dog</label>
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
      </Form>
    </div>
  );
};
export default PostADog;
