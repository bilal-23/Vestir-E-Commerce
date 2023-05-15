import styles from "./SideMenu.module.css";
import { useState, useEffect } from "react";

import { NavLink, useLocation } from "react-router-dom";

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
  const [hovered, setHovered] = useState(0);
  const location = useLocation();

  useEffect(() => {
    handlerOverlayColor();
  }, [location.pathname]);

  console.log(hovered, location);

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
            <NavLink
              to="/auth"
              onClick={toggleMenu}
              onMouseEnter={() => setHovered(3)}
              onMouseLeave={() => handlerOverlayColor()}
            >
              Login
            </NavLink>
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
