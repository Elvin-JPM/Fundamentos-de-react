import { useState } from "react";
import { test } from "../playAround";
import NoAddsYet from "../Components/NoAddsYet";
import Adds from "../Components/Adds";

function AddsPage() {
  const [showMessage, setShowMessage] = useState("doNotShow");
  const [message, setMessage] = useState("");

  const handleShowMessage = (newMessage, newMessageStatus) => {
    setMessage(newMessage);
    setShowMessage(newMessageStatus);
  };

  const addNumber = test.length;

  return <div>{addNumber > 0 ? <Adds /> : <NoAddsYet />}</div>;
}

export default AddsPage;
