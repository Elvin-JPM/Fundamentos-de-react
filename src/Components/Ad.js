import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../api/api";
import storage from "../api/storage";
import { useEffect, useState } from "react";

function Ad() {
  const navigate = useNavigate();
  const [ad, setAd] = useState("");
  const { id } = useParams();
  const authToken = storage.get("authToken");
  const sessionToken = sessionStorage.getItem("authToken");

  useEffect(() => {
    if (sessionToken || authToken) {
      try {
        const fetchData = async () => {
          const response = await getData(`/v1/adverts/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken ? authToken : sessionToken}`,
            },
          });
          console.log(response);
          setAd(response);
        };

        fetchData();
      } catch (error) {}
    } else {
      navigate("/login");
    }
  }, [authToken, id, navigate, sessionToken]);

  if (typeof ad === "undefined") {
    navigate("/notFound");
    return;
  }
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
