import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! Page Not Found</h3>
          <p>We can't seem to find the page you're looking for..</p>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>
        <div>
          <h3>Something went wrong</h3>
        </div>
        <button
          type="button"
          style={{
            backgroundColor: "whitesmoke",
            border: "none",
            borderRadius: "0.5rem",
            padding: "10px 20px",
          }}
        >
          <Link to="/dashboard">Back Home</Link>
        </button>
      </Wrapper>
    </>
  );
};
export default Error;
