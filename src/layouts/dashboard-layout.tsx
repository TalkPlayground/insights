import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { useUser, useAuth } from "@clerk/clerk-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import Logo from "../components/Logo";
import DashboardHamburger from "../components/DashboardHamburger";

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  // Redirect to the sign-in page if the user is not signed in
  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  // Show a loading message while checking auth status
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const { isSignedIn, user } = useUser();

  console.log(isSignedIn, user, isLoaded);

  return (
    <>
      <header className="header-container">
        <Logo />
        <nav className="nav-bar">
          <div className="nav-items">
            <ul>
              <li>
                <Link to="/dashboard">Home</Link>
              </li>
              <li>
                <Link to="/dashboard/wheels">Wheels</Link>
              </li>
              <li>
                <Link to="/dashboard/self-talk">Self-Talk</Link>
              </li>
            </ul>
          </div>
          <div className="btn-hamburger-container">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in" className="sign-in-link nav-sign-in-link">
                Sign Up / Sign In
              </Link>
            </SignedOut>
            <DashboardHamburger />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
