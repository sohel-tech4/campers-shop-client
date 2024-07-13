import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const Nav = (
    <>
      <Link
        to="/"
        className={`px-3 hover:text-black rounded hover:duration-1000 ${location.pathname === "/"
          ? "active-link font-bold bg-opacity-80 text-black"
          : ""
          }`}
      >
        Home
      </Link>
      <Link
        to="/aboutus"
        className={`px-3  hover:text-black rounded hover:duration-1000 ${location.pathname === "/aboutus"
          ? "active-link font-bold bg-opacity-80 text-black"
          : ""
          }`}
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className={`px-3  hover:text-black rounded hover:duration-1000 ${location.pathname === "/contact"
          ? "active-link font-bold bg-opacity-80 text-black"
          : ""
          }`}
      >
        Contact
      </Link>
    </>
  );
  return (
    <>
      <div className="navbar bg-[#FE892C] bg-opacity-60 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Nav}
            </ul>
          </div>
          <div className="md:flex justify-center items-center gap-3">
            <img
              src="../../../public/the Camp Logo.png"
              className="w-16"
              alt=""
            />
            <h1 className="font-bold">The Campsite Corner</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">{Nav}</div>
        <div className="navbar-end">
          <Button>Login</Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
