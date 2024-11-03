import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
import TherapistsPage from "./routes/therapists";
import DashboardPage from "./routes/dashboard";
import WheelsPage from "./routes/dashboard/dashboard.wheels";
import SelfTalkPage from "./routes/dashboard/dashboard.self-talk";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/patients", element: <PatientsPage /> },
      { path: "/therapists", element: <TherapistsPage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/wheels", element: <WheelsPage /> },
          { path: "/dashboard/self-talk", element: <SelfTalkPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
