import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";

// Create browser router - this will only run on the client
const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
