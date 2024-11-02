import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div>
      <h1>Welcome to TalkPlayground Insights</h1>
      <div>
        <ul>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
