import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
import { useData } from "../../context/DataContext";

const Categories = () => {
  const { categories } = useData();

  return (
    <section className={styles["container"]}>
      <p className={`${styles["heading"]} text-300 text-l`}>Categories</p>
      <div className={styles["categories"]}>
        {categories &&
          categories?.map((category) => {
            return (
              <Category
                key={category._id}
                name={category.name}
                image={category.image}
                link={`/products/?category=${category.tag}`}
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
