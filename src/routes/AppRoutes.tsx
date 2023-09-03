import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import About from "../pages/About";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
