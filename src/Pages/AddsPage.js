import { useState } from "react";

function AddsPage() {
  const [showMessage, setShowMessage] = useState("doNotShow");
  const [message, setMessage] = useState("");

  const handleShowMessage = (newMessage, newMessageStatus) => {
    setMessage(newMessage);
    setShowMessage(newMessageStatus);
  };
  return <div>AddsPage</div>;
}

export default AddsPage;
