import BtnCreateAdd from "./BtnCreateAdd.js";
import styles from "./Ads.module.css";
import { Link } from "react-router-dom";

function Adds({ adsList }) {
  return (
    <div>
      {adsList.map((ad) => (
        <Link className={styles.link} to={`/${ad.id}`} key={ad.id}>
          <div className={styles.card}>
            <p>Name: {ad.name}</p>
            <p>For Sale: {ad.sale ? "For Sale" : "Looking to buy"}</p>
            <p>Price: {ad.price}</p>
            <img src={`${ad.photo}`} alt="product"></img>
          </div>
        </Link>
      ))}

      <BtnCreateAdd />
    </div>
  );
}

export default Adds;
