import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./Components/Layout"
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Listings from "./Pages/Listings";
import VenuePage from "./Pages/Listing";
import BookingConfirmedPage from "./Pages/BookingConfirmation";


export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="listings" element={<Listings />} />
          <Route path="listing/:id" element={<VenuePage />} />
          <Route path="bookingconfirmation" element={<BookingConfirmedPage />} />
        </Route>
      </Routes>
    <ToastContainer position="top-center" />
    </div>
  )
}

