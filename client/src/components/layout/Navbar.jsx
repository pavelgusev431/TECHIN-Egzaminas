import { useLocation, useNavigate, Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import { useContext } from "react";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#800020]"
      : "text-black";

  const handleLogout = () => {
    setAuth(null);
    navigate("/");
  };

  return auth ? (
    <nav className="flex justify-between">
      <Link
        to="home"
        className={`block py-2 px-2 rounded-sm hover:bg-gray-200 md:p-3 ${isActive(
          "/home"
        )}`}
      >
        Home
      </Link>
      <Link
        to="myproducts"
        className={`block py-2 px-2 rounded-sm hover:bg-gray-200 md:p-3 ${isActive(
          "/myproducts"
        )}`}
      >
        Products
      </Link>
      <button onClick={handleLogout}
        className="block py-2 px-2 text:black rounded-sm hover:bg-gray-200 md:p-3"
      >Log Out</button>
    </nav>
  ) : (
    <></>
  );
};

export default NavBar;