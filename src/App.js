import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader, action } from "./pages/HomePage";

const myRouter = createBrowserRouter([
  { path: "/", element: <HomePage />, loader: loader, action: action },
]);

function App() {
  return <RouterProvider router={myRouter}></RouterProvider>;
}

export default App;
