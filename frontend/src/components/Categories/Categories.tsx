import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
import { v4 as uuidv4 } from "uuid";

const categories = [
  {
    id: uuidv4(),
    name: "For Him",
    image:
      "https://ik.imagekit.io/averno2301/Vestir/Categories/men_ZhuPEEDd-.webp?updatedAt=1684346517360",
    link: "/products/?category=men",
  },
  {
    id: uuidv4(),
    name: "For Her",
    image:
      "https://ik.imagekit.io/averno2301/Vestir/Categories/women_aNq5_KdZb.webp?updatedAt=1684346517365",
    link: "/products/?category=women",
  },
  {
    id: uuidv4(),
    name: "Accessories",
    image:
      "https://ik.imagekit.io/averno2301/Vestir/Categories/accessories_vc7OvUAYe.webp?updatedAt=1684346517445",
    link: "/products/?category=accessories",
  },
];

const Categories = () => {
  return (
    <section className={styles["container"]}>
      <p className={`${styles["heading"]} text-300 text-l`}>Categories</p>
      <div className={styles["categories"]}>
        {categories.map((category) => {
          return (
            <Category
              key={category.id}
              name={category.name}
              image={category.image}
              link={category.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categories;

interface Props {
  name: string;
  image: string;
  link: string;
}
const Category: React.FC<Props> = ({ name, image, link }) => {
  return (
    <Link to={link} className={`${styles["btn"]}  text-xs`}>
      <div className={styles["card"]}>
        <img
          src={image}
          alt={name}
          className={styles["image"]}
          loading="eager"
        />
        <div className={styles["text"]}>
          <p className={`text-s text-300`}>Shop</p>
          <p className={`text-m text-300 ${styles["card-name"]}`}>{name}</p>
        </div>
      </div>
    </Link>
  );
};
