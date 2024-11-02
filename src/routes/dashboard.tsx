import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard page</h1>
      This is a protected page.
      <ul>
        <li>
          <Link to="/dashboard/wheels">Wheels</Link>
        </li>
        <li>
          <Link to="/dashboard/self-talk">Self-Talk</Link>
        </li>
        <li>
          <Link to="/">Return to index</Link>
        </li>
      </ul>
    </>
  );
}
