//Start a project using this command: npm rum dev 
import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import UrlProvider from "./context";

import AppLayout from "./layouts/app-layout";
import RequireAuth from "./components/require-auth";

import RedirectLink from "./pages/redirect-link";
import LandingPage from "./pages/landing";
import Dashboard from "./pages/dashboard";
import LinkPage from "./pages/link";
import Auth from "./pages/auth";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <LinkPage />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
}

export default App;


// const router = createBrowserRouter([...]): This line creates a browser router instance, which is responsible for handling navigation within a single-page application (SPA).
// element: <AppLayout />: This defines the main layout component (AppLayout) that will be rendered for all routes. It acts as a wrapper for the child routes.
// children: [...]: This array contains the route definitions that are children of AppLayout.
// path: "/": This specifies the root path of the application, rendering the LandingPage component.
// path: "/auth": This path renders the Auth component for authentication-related pages.
// path: "/dashboard": This path renders the Dashboard component, but only if the user is authenticated (RequireAuth component checks for authentication).
// path: "/link/:id": This path renders the LinkPage component for a specific link identified by :id, also requiring authentication.
// path: "/:id": This path renders the RedirectLink component for any other path matching a dynamic id.