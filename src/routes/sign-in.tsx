import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <>
      <SignIn />
      <div className="sign-up-footer">
        <span>Don't have an account?</span>
        <a href="/sign-up" className="sign-up-link">
          Sign Up
        </a>
      </div>
    </>
  );
}
