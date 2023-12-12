import BtnCreateAdd from "./BtnCreateAdd.js";
import styles from "./Ads.module.css";
import { Link } from "react-router-dom";

function Adds({ adsList, name, minPrice, maxPrice, adType, tags }) {
  return (
    <div>
      {adsList.map((ad) =>
        ad.name.includes(name) ? (
          <Link className={styles.link} to={`/adds/${ad.id}`} key={ad.id}>
            <div className={styles.card}>
              <p>Name: {ad.name}</p>
              <p>For Sale: {ad.sale ? "For Sale" : "Looking to buy"}</p>
              <p>Price: {ad.price}</p>
              <p>Tags: {ad.tags.join(",")}</p>
              <img src={`${ad.photo}`} alt="product"></img>
            </div>
          </Link>
        ) : (
          ""
        )
      )}

      <BtnCreateAdd />
    </div>
  );
}

export default Adds;
