import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
import { v4 as uuidv4 } from "uuid";

const categories = [
  {
    id: uuidv4(),
    name: "For Him",
    image:
      "https://ik.imagekit.io/averno2301/Vestir/Categories/men-clothes_6xOscgU9t.webp?updatedAt=1684261028991",
  },
  {
    id: uuidv4(),
    name: "For Her",
    image:
      "https://ik.imagekit.io/averno2301/Vestir/Categories/women-clothes_L21E0SFkx.webp?updatedAt=1684261029045",
  },
  {
    id: uuidv4(),
    name: "For Kids",
    image:
      "https://ik.imagekit.io/averno2301/Vestir/Categories/kid-clothes_QH5CeH2TR.webp?updatedAt=1684261029041",
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
}
const Category: React.FC<Props> = ({ name, image }) => {
  return (
    <div className={styles["card"]}>
      <img src={image} alt={name} className={styles["image"]} loading="eager" />
      <Link
        to={`/products/?category=${name}`}
        className={`${styles["btn"]}  text-xs`}
      >
        {name}
      </Link>
    </div>
  );
};
