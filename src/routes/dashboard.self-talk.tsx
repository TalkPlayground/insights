import { Link } from "react-router-dom";

export default function SelfTalkPage() {
  return (
    <>
      <h1>Self-Talk page</h1>
      <p>This is a protected page.</p>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Return to index</Link>
        </li>
      </ul>
    </>
  );
}
