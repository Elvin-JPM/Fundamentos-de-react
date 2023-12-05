import { useState } from "react";
import { test } from "../playAround";
import NoAddsYet from "../Components/NoAddsYet";
import Adds from "../Components/Adds";

import storage from "../api/storage";
import { getData } from "../api/api";
import { useNavigate } from "react-router-dom";

function AddsPage() {
  const addNumber = test.length;
  const navigate = useNavigate();
  const authToken = storage.get("authToken");
  if (authToken) {
    const response = async () =>
      await getData("/v1/adverts", {
        headers: { Authorization: `Bearer ${authToken}` },
      });

    console.log(response);
  } else {
    navigate("/login");
  }

  return <div>{addNumber > 0 ? <Adds /> : <NoAddsYet />}</div>;
}

export default AddsPage;
