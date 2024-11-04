import { Link, Outlet } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

import Logo from "../components/Logo";
import Hamburger from "../components/Hamburger";

export default function RootLayout() {
  return (
    <>
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
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in" className="sign-in-link nav-sign-in-link">
                Sign Up / Sign In
              </Link>
            </SignedOut>
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
    </>
  );
}
