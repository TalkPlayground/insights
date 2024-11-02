import { Link } from "react-router-dom";

export default function PricingPage() {
  return (
    <>
      <h1>Pricing</h1>
      <p>
        This is a public page meant to contain a pricing form and other related
        pricing details.
      </p>
      <ul>
        <li>
          <Link to="/">Return to Index</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </>
  );
}
