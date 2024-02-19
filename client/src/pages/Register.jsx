import { Form, redirect, useNavigation, Link } from "react-router-dom";

import { FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import { Flip, Zoom, toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration Successful!");
    return redirect("/login");
  } catch (error) {
    return toast.error(error?.response?.data?.msg || "Something Went Wrong...");
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="POST" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Bragi" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Sivarss"
        />
        <FormRow type="text" name="location" defaultValue="Reykjavik" />
        <FormRow type="email" name="email" defaultValue="bragi@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <p>
          Already a Member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
