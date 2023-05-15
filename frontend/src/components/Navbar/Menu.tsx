import styles from "./Menu.module.css";
import SideMenu from "./SideMenu";

interface Props {
  showMenu: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<Props> = ({ showMenu, toggleMenu }) => {
  return (
    <>
      <div className={styles["menu"]} onClick={toggleMenu}>
        <div
          className={`${styles["menu-hamburger"]} ${
            showMenu ? styles["active"] : ""
          }`}
        ></div>
      </div>
      <SideMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default Menu;
