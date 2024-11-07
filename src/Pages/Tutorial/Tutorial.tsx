import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./tutorial.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hey hey</div>,
  },
  {
    path: "/hey",
    element: <div>dog</div>,
  },
]);

export const Tutorial: React.FC = () => {
  return (
    <div>
      <h3>Tutorial</h3>
      <RouterProvider router={router} />
    </div>
  );
};
