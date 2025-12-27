import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { use, useEffect, useState } from "react";
import MyLink from "./Mylink";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogout = () => {
    signOutUser()
      .then(() => navigate("/login"))
      .catch(console.log);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar mx-auto px-3 sm:px-6 lg:px-0 lg:w-[1220px]">
        {/* ================= Navbar Start ================= */}
        <div className="navbar-start gap-2">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm lg:hidden"
            >
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
              className="
                menu
                menu-sm
                dropdown-content
                bg-base-100
                rounded-box
                z-[50]
                mt-3
                w-56
                p-2
                shadow
              "
            >
              <li>
                <MyLink to="/events">Upcoming Events</MyLink>
              </li>
              <li>
                <MyLink to="/create-event">Create Event</MyLink>
              </li>
              <li>
                <MyLink to="/manage-events">Manage Events</MyLink>
              </li>
              <li>
                <MyLink to="/joined-events">Joined Events</MyLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-red-600 text-xl sm:text-2xl font-bold">
            EventHub
          </Link>
        </div>

        {/* ================= Navbar Center ================= */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <MyLink to="/events">Upcoming Events</MyLink>
            </li>
            <li>
              <MyLink to="/create-event">Create Event</MyLink>
            </li>
            <li>
              <MyLink to="/manage-events">Manage Events</MyLink>
            </li>
            <li>
              <MyLink to="/joined-events">Joined Events</MyLink>
            </li>
          </ul>
        </div>

        {/* ================= Navbar End ================= */}
        <div className="navbar-end gap-2">
          {!user ? (
            <Link
              to="/login"
              className="btn btn-sm sm:btn-md rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white border-none"
            >
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <img
                tabIndex={0}
                role="button"
                src={user.photoURL}
                title={user.displayName}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full cursor-pointer"
                referrerPolicy="no-referrer"
              />

              {/* Profile Dropdown */}
              <ul className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-xl w-60 z-[50]">
                {/* User Info */}
                <li>
                  <p className="font-semibold">{user.displayName}</p>
                  <p className="text-gray-500 text-sm truncate">{user.email}</p>
                </li>

                <li className="border-t my-1"></li>

                <li>
                  <MyLink to="/profile">Profile</MyLink>
                </li>
                <li>
                  <MyLink to="/settings">Settings</MyLink>
                </li>

                <li className="px-0 py-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <span className="text-sm">Dark Mode</span>
                    <input
                      onChange={(e) => handleTheme(e.target.checked)}
                      type="checkbox"
                      defaultChecked={localStorage.getItem("theme") === "dark"}
                      className="toggle toggle-sm"
                    />
                  </label>
                </li>

                <li className="border-t my-1"></li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
