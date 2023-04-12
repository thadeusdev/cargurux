import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CarForSale from "./pages/CarForSale/CarForSale";
import CarAccessories from "./pages/CarAccessories/CarAccessories";
import CarTracking from "./pages/CarTracking/CarTracking";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";
import Insurance from "./pages/Insurance/Insurance";
import AboutUs from "./pages/AboutUs/AboutUs";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [ 
      {
        path: "/",
        element: <Home />,
      },     
      {
        path: "/cars-for-sale",
        element: <CarForSale />,
      },
      {
        path: "/car-accessories",
        element: <CarAccessories />,
      },
      {
        path: "/car-tracking",
        element: <CarTracking />,
      },
      {
        path: "/blog-listing",
        element: <Blogs />,
      },
      {
        path: "/vehicle-insurance",
        element: <Insurance />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ]
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
