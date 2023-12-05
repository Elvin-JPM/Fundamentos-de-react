import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../api/api";
import storage from "../api/storage";
import { useEffect, useState } from "react";

function Ad() {
  const navigate = useNavigate();
  const [ad, setAd] = useState("");
  const { id } = useParams();
  const authToken = storage.get("authToken");

  useEffect(() => {
    if (authToken) {
      try {
        const fetchData = async () => {
          const response = await getData(`/v1/adverts/${id}`, {
            headers: { Authorization: `Bearer ${authToken}` },
          });
          console.log(response);
          setAd(response);
        };

        fetchData();
      } catch (error) {}
    } else {
      navigate("/login");
    }
  }, [authToken, id, navigate]);

  return (
    <div>
      <p>{ad.name}</p>
      <p>{ad.price}</p>
      <p>{ad.tags}</p>
      <img src={`${ad.photo}`} alt="product"></img>
    </div>
  );
}

export default Ad;
