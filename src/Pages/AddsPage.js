import { useEffect, useState } from "react";
import NoAddsYet from "../Components/NoAddsYet";
import Ads from "../Components/Ads";

import storage from "../api/storage";
import { getData } from "../api/api";
import { useNavigate } from "react-router-dom";

function AdsPage() {
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();
  const authToken = storage.get("authToken");
  const sessionToken = sessionStorage.getItem("authToken");

  useEffect(() => {
    if (sessionToken || authToken) {
      const fetchData = async () => {
        try {
          const response = await getData("/v1/adverts", {
            headers: {
              Authorization: `Bearer ${authToken ? authToken : sessionToken}`,
            },
          });
          setAds(response);
          console.log(response);
        } catch (error) {}
      };

      fetchData();
    } else {
      navigate("/login");
    }
  }, [authToken]);

  return <div>{ads.length > 0 ? <Ads adsList={ads} /> : <NoAddsYet />}</div>;
}

export default AdsPage;
