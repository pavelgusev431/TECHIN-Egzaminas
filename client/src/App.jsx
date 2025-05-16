import { Routes, Route } from "react-router";
import Auth from "./components/layout/Auth.jsx";
import NotFound from "./components/layout/NotFound.jsx";
import NavBar from "./components/layout/Navbar.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Auth />} />
        {ProtectedRoutes()}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
