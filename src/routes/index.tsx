import { Link } from "react-router-dom";
import { SignedOut, useClerk } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function IndexPage() {
  const { user, redirectToSignIn } = useClerk();

  if (user) {
    return <Navigate to="/pre-dashboard" />;
  }

  return (
    <>
      <h1 className="hero-text">
        Understanding your <br />
        <b>feelings</b> just got a <br />
        whole lot easier.
      </h1>
      <SignedOut>
        <Link to="/sign-in" className="sign-in-link">
          Sign Up / Sign In
        </Link>
      </SignedOut>
    </>
  );
}
