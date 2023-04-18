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
import Dashboard from "./pages/Dashboard/Dashboard";
import CarForSaleAdmin from "./pages/CarForSale-admin/CarForSaleAdmin"
import AboutUsAdmin from './pages/AboutUs-admin/AboutUsAdmin'
import BlogAdmin from './pages/Blogs-admin/BlogAdmin'
import CarAccessoriesAdmin from './pages/CarAccessories-admin/CarAccessoriesAdmin'
import CarTrackingAdmin from './pages/CarTracking-admin/CarTrackingAdmin'
import InsuranceAdmin from './pages/Insurance-admin/InsuranceAdmin'
import NavbarAdmin from "./components/Navbar-admin/NavbarAdmin";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const Admin = () => {
  return (
    <div>
      <NavbarAdmin>
      <Outlet />
      </NavbarAdmin>
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
  {
    path: "/admin",
    element: <Admin />,
    children: [ 
      {
        path: "/admin",
        element: <Dashboard/>,
      }, 
      {
        path: "/admin/dashboard",
        element: <Dashboard/>,
      },      
      {
        path: "/admin/cars-for-sale",
        element: <CarForSaleAdmin />,
      },
      {
        path: "/admin/car-accessories",
        element: <CarAccessoriesAdmin />,
      },
      {
        path: "/admin/car-tracking",
        element: <CarTrackingAdmin />,
      },
      {
        path: "/admin/blog-listing",
        element: <BlogAdmin />,
      },
      {
        path: "/admin/vehicle-insurance",
        element: <InsuranceAdmin />,
      },
      {
        path: "/admin/about-us",
        element: <AboutUsAdmin />,
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
