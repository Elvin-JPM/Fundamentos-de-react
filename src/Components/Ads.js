import BtnCreateAdd from "./BtnCreateAdd.js";
import styles from "./Ads.module.css";
function Adds({ adsList }) {
  return (
    <div>
      {adsList.map((ad) => (
        <div className={styles["card"]} key={ad.id}>
          <p>Name: {ad.name}</p>
          <p>For Sale: {ad.sale ? "For Sale" : "Looking to buy"}</p>
          <p>Price: {ad.price}</p>
          <img src={`${ad.photo}`} alt="product"></img>
        </div>
      ))}

      <BtnCreateAdd />
    </div>
  );
}

export default Adds;
