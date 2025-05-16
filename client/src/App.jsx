import { Routes, Route } from "react-router";
import Auth from "./components/layout/Auth.jsx";
import Home from "./components/layout/Home.jsx";
import NotFound from "./components/layout/NotFound.jsx";

const App = () => {
  return (
    <Routes>
      <Route index element={<Auth />} />
      <Route path="home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
