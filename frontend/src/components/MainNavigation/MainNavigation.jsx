import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className={`navbar-brand ${classes["logo"]}`}>DRFMS</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return isActive
                      ? { color: "white", backgroundColor: "black" }
                      : {};
                  }}
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Donors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return isActive
                      ? { color: "white", backgroundColor: "black" }
                      : {};
                  }}
                  className="nav-link"
                  aria-current="page"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return isActive
                      ? { color: "white", backgroundColor: "black" }
                      : {};
                  }}
                  className="nav-link"
                  aria-current="page"
                  to="/managers"
                >
                  Managers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
