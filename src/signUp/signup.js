import axios from "axios";
import { useState } from "react";

// async function fetchData() {
//   const body = {
//     email: "eposadas2@gmail.com",
//     password: "1234",
//     username: "elvposadas2",
//     name: "e posadas 2",
//   };

//   try {
//     const response = await axios.post(
//       "http://127.0.0.1:3001/api/auth/signup",
//       body
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// export default fetchData();

function FormData() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handleNameChange = (newName) => {
    setName(newName);
  };
  return (
    <>
      <form>
        <Input
          type="email"
          value={email}
          placeholder="email"
          handleChange={handleEmailChange}
        ></Input>
        <Input
          type="password"
          value={password}
          placeholder="password"
          handleChange={handlePasswordChange}
        ></Input>
        <Input
          type="text"
          value={username}
          placeholder="username"
          handleChange={handleUsernameChange}
        ></Input>
        <Input
          type="text"
          value={name}
          placeholder="name"
          handleChange={handleNameChange}
        ></Input>
        <input type="button" value={"Sign Up"}></input>
      </form>
    </>
  );
}

function Input({ type, value, placeholder, handleChange }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
    ></input>
  );
}

export default FormData;
