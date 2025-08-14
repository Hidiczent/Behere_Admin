import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/AppRoutes";

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
