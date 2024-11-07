import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./error";
import { ContactPage } from "./routes/contact";
import { Root } from "./routes/root";
import "./tutorial.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <ContactPage />,
  },
]);

export const Tutorial: React.FC = () => {
  return (
    <div style={{ height: "40%" }}>
      <h3>Tutorial</h3>
      <RouterProvider router={router} />
    </div>
  );
};
