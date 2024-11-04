import { Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function PreDashboardPage() {
  return (
    <>
      <SignedIn>
        <Link to="/dashboard" className="sign-in-link">
          View My Insights
        </Link>
      </SignedIn>
      <SignedOut>
        <Navigate to="/sign-in" />
      </SignedOut>
    </>
  );
}
