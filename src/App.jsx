import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import FlightListings from './pages/FlightListings';
import MakePayment from './pages/MakePayment';
import Dates from './pages/Dates';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/flightlists",
    element: <FlightListings />,
  },
  {
    path: "/makepayment",
    element: <MakePayment />,
  },
  {
    path: "/dates",
    element: <Dates />,
  },
]);

function App() {

  return (
    <Layout>
      

      <RouterProvider router={router} />

    </Layout>

  )
}

export default App
