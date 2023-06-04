import { useUserData } from "../../context/UserData";
import { useAuth } from "../../context/AuthContext";
import styles from "./SideMenu.module.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { NavLink, useLocation } from "react-router-dom";
import { useFilter } from "../../context/FilterContext";

interface Props {
  showMenu: boolean;
  toggleMenu: () => void;
}

const overlayBackgroundColors = [
  "rgba(169, 183, 180, 0.8)",
  "rgba(236, 103, 97, 0.8)",
  "rgba(247, 191, 177, 0.8)",
  "rgba(235, 188, 78, 0.8)",
];

const SideMenu: React.FC<Props> = ({ showMenu, toggleMenu }) => {
  const { user, logout } = useAuth();
  const { clearFilters } = useFilter();
  const [hovered, setHovered] = useState(0);
  const location = useLocation();
  const { resetUserDataContext } = useUserData();

  useEffect(() => {
    handlerOverlayColor();
  }, [location.pathname]);

  const handlerOverlayColor = () => {
    if (location.pathname === "/") {
      return setHovered(0);
    }
    if (location.pathname === "/cart") {
      return setHovered(1);
    }
    if (location.pathname === "/profile") {
      return setHovered(2);
    }
    if (location.pathname === "/auth") {
      return setHovered(3);
    }
  };

  const handleLogout = () => {
    logout();
    resetUserDataContext();
    clearFilters();
    toast.success("Logged out successfully");
  };

  return (
    <div
      className={`${styles["container"]} ${showMenu ? styles["active"] : ""}`}
    >
      <div className={styles["menu"]}>
        <ul className={styles["nav-links"]}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                !isActive ? styles["navlink-1"] : styles["navlink-1-selected"]
              }
              onClick={toggleMenu}
              onMouseEnter={() => setHovered(0)}
              onMouseLeave={() => handlerOverlayColor()}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                !isActive ? styles["navlink-3"] : styles["navlink-3-selected"]
              }
              onClick={toggleMenu}
              onMouseEnter={() => setHovered(3)}
              onMouseLeave={() => handlerOverlayColor()}
            >
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                !isActive ? styles["navlink-2"] : styles["navlink-2-selected"]
              }
              onClick={toggleMenu}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => handlerOverlayColor()}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                !isActive ? styles["navlink-3"] : styles["navlink-3-selected"]
              }
              onClick={toggleMenu}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => handlerOverlayColor()}
            >
              Profile
            </NavLink>
          </li>
          <li className={styles["navlink-4"]}>
            {user ? (
              <NavLink
                to="/"
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                onMouseEnter={() => setHovered(3)}
                onMouseLeave={() => handlerOverlayColor()}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/auth"
                onClick={toggleMenu}
                onMouseEnter={() => setHovered(3)}
                onMouseLeave={() => handlerOverlayColor()}
                state={{ from: location }}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
        <div className={styles["socials-container"]}> </div>
      </div>
      <div
        className={styles["overlay"]}
        onClick={toggleMenu}
        style={{
          background: overlayBackgroundColors[hovered],
        }}
      ></div>
    </div>
  );
};

export default SideMenu;
