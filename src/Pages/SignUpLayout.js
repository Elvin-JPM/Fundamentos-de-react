import Signup from "../signUp/Signup.js";
import Message from "../Components/Message";
import { useState } from "react";

function SignUpLayout() {
  const [showMessage, setShowMessage] = useState("doNotShow");
  const [message, setMessage] = useState("");

  const handleShowMessage = (newMessage, newMessageStatus) => {
    console.log(newMessageStatus);
    console.log(newMessage);
    setMessage(newMessage);
    setShowMessage(newMessageStatus);
  };

  return (
    <>
      <Signup handleShowMessage={handleShowMessage} />
      <Message message={message} showMessage={showMessage} />
    </>
  );
}

export default SignUpLayout;
