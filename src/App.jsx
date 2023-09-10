import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout"
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";


export default function App() {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

