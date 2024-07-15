import React from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("Data to be sent:", data); // Add this line for debugging
  try {
    const response = await customFetch.post("/auth/register", data);
    toast.success("Registration Successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="post" className="login-form">
      <div className="login-logo">
        <Logo />
      </div>
      <h4>Register</h4>
      <FormRow type="text" name="name" />
      <FormRow type="text" name="lastName" />
      <FormRow type="email" name="email" />
      <FormRow type="password" name="password" />
      <button type="submit" className="btn btn-block" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      <p>
        Already a Member
        <Link to="/login" className="member-btn">
          Login
        </Link>
      </p>
    </Form>
  );
};

export default Register;
