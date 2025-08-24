import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/notFound";
import ProjectListing from "./pages/projectListing";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/projectlisting",
      element: <ProjectListing />,
    },
    // {
    //   path: "/",
    //   element: <Layout />,
    //   children: [
    //     {
    //       path: "/",
    //       element: <Home />,
    //     },
    //   ],
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;