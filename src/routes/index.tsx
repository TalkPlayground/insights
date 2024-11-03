import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <>
      <h1 className="hero-text">
        Understanding your <br />
        <b>feelings</b> just got a <br />
        whole lot easier.
      </h1>
      <Link to="/sign-in" className="sign-in-link">
        Sign Up / Sign In
      </Link>
    </>
  );
}
