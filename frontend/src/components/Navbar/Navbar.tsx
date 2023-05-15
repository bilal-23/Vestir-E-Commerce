import Menu from "./Menu";
import styles from "./Navbar.module.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target.closest("form") || target.closest("input")) return;
      setSearch(false);
    });

    return () => {
      window.removeEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target.closest("form") || target.closest("input")) return;
        setSearch(false);
      });
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuActive((prev) => !prev);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <nav className={styles["nav"]}>
      <div className={styles["navbar"]}>
        <Menu showMenu={menuActive} toggleMenu={toggleMenu} />
        <div className={styles["navbar_brand"]}>
          <Link to="/">Vestir.</Link>
        </div>
        <div className={styles["nav-icons"]}>
          <form className={styles["search-item"]} onSubmit={handleSubmit}>
            <input
              type="search"
              className={`${
                search ? styles["search"] : styles["search-hide"]
              }  `}
              placeholder="Search Item"
            />
            <SearchIcon
              className={styles["icon"]}
              onClick={() => {
                setSearch((prev) => !prev);
              }}
            />
          </form>
          <Link to="/profile">
            <PersonIcon
              className={styles["icon"]}
              onClick={() => {
                if (!menuActive) return;
                toggleMenu();
              }}
            />
          </Link>
          <Link to="/cart">
            <ShoppingBasketIcon
              className={styles["icon"]}
              onClick={() => {
                if (!menuActive) return;
                toggleMenu();
              }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;