import { Link, Outlet } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Logo from "../components/Logo";
import Hamburger from "../components/Hamburger";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <header className="header-container">
        <Logo />
        <nav className="nav-bar">
          <div className="nav-items">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/therapists">Therapists</Link>
              </li>
              <li>
                <Link to="/patients">Patients</Link>
              </li>
            </ul>
          </div>
          <div className="btn-hamburger-container">
            <Link to="/sign-in" className="sign-in-link nav-sign-in-link">
              Sign Up / Sign In
            </Link>
            <Hamburger />
          </div>
        </nav>
      </header>
      <main>
        <div className="main-body">
          <div className="left-column">
            <Outlet />
          </div>
          <div className="right-column">
            <img src={"/design.png"} alt="design" className="design-image" />
          </div>
        </div>
      </main>
    </ClerkProvider>
  );
}
