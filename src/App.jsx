import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import FlightListings from './pages/FlightListings';
import MakePayment from './pages/MakePayment';
import Dates from './components/DatePicker';

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
    path: "/makepayment/:id",
    element: <MakePayment />,
  },
  {
    path: "/dates",
    element: <Dates />,
  },
]);

function App() {

  return (
      

      <RouterProvider router={router} />

  )
}

export default App
