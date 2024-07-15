import React from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/login", data);
    const role = response.data.user.role;

    toast.success("Login Successful");
    if (role === "admin") {
      return redirect("/admin");
    }
    return redirect("/service");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="post" className="login-form">
      <div className="login-logo">
        <Logo />
      </div>
      <h4>Login</h4>
      <FormRow type="email" name="email" />
      <FormRow type="password" name="password" />
      <button type="submit" className="btn btn-block" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      <p>
        Not a Member?
        <Link to="/register" className="member-btn">
          Register
        </Link>
      </p>
    </Form>
  );
};

export default Login;
