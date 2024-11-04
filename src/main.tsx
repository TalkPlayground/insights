import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
// Import the layouts
import RootLayout from "./layouts/root-layout";
import DashboardLayout from "./layouts/dashboard-layout";

// Import the components
import IndexPage from "./routes";
import AboutPage from "./routes/about";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import PricingPage from "./routes/pricing";
import PatientsPage from "./routes/patients";
import DashboardPage from "./routes/dashboard/dashboard";
import TherapistsPage from "./routes/therapists";
import PreDashboardPage from "./routes/pre-dashboard";

import WheelsPage from "./routes/dashboard/dashboard.wheels";
import SelfTalkPage from "./routes/dashboard/dashboard.self-talk";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  // Routes that use RootLayout
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/patients", element: <PatientsPage /> },
      { path: "/therapists", element: <TherapistsPage /> },
      { path: "/pre-dashboard", element: <PreDashboardPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
    ],
  },

  // Routes that use DashboardLayout
  {
    element: <DashboardLayout />,
    path: "/dashboard",
    children: [
      { index: true, element: <DashboardPage /> }, // Default route for "/dashboard"
      { path: "wheels", element: <WheelsPage /> },
      { path: "self-talk", element: <SelfTalkPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
