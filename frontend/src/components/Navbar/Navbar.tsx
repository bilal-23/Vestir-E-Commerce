import Menu from "./Menu";
import styles from "./Navbar.module.css";
import PersonIcon from "@mui/icons-material/Person";
import CartIcon from "../../assets/cart.svg";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserData";
import { useFilter } from "../../context/FilterContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const searchInputRef = useRef<HTMLInputElement | null>(null)!;
  const mobileSearchInputRef = useRef<HTMLInputElement | null>(null)!;
  const [search, setSearch] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const { cartItemsCount } = useUserData();
  const { searchProducts, searchTerm, setSearchTerm } = useFilter();

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

  const handleSubmit = (e: any, isMobile: boolean = false) => {
    e.preventDefault();
    if (searchTerm === "") {
      toast.error("Please enter a search term");
      return;
    }
    searchProducts(searchTerm);
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
            <div className={styles["search-input-container"]}>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`${
                  search ? styles["search"] : styles["search-hide"]
                }  `}
                ref={searchInputRef}
                placeholder="Search Item"
              />
            </div>
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
          <Link to="/wishlist">
            <FavoriteIcon
              sx={{ fontSize: 15 }}
              className={styles["icon"]}
              onClick={() => {
                if (!menuActive) return;
                toggleMenu();
              }}
            />
          </Link>
          <Link to="/cart">
            <div
              className={styles["cart-icon-container"]}
              onClick={() => {
                if (!menuActive) return;
                toggleMenu();
              }}
            >
              <span className={`text-xs text-400 ${styles["cart-quantity"]}`}>
                {cartItemsCount}
              </span>
              <img src={CartIcon} alt="cart" className={styles["cart-icon"]} />
            </div>
          </Link>
        </div>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e, true)}
        className={`${styles["mobile-search"]}
      ${search ? styles["mobile-search-active"] : ""} `}
      >
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          ref={mobileSearchInputRef}
          placeholder="Search Item"
        />
      </form>
    </nav>
  );
};

export default Navbar;
