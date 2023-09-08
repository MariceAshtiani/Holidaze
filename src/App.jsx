import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout"
import Home from "./Pages/Home";
import Register from "./Pages/Register";


export default function App() {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="Register" element={<Register />} />
      </Route>
    </Routes>
  )
}

