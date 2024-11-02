import React from "react";
import { useClerk } from "@clerk/clerk-react";

const Logo: React.FC = () => {
  const { user, redirectToSignIn } = useClerk();

  const handleClick = () => {
    if (user) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div onClick={handleClick}>
      <img src="/header_logo.png" alt="Logo" className="logo" />
    </div>
  );
};

export default Logo;
