import axios from "axios";
import { useState } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (inputId, newValue) => {
    if (inputId === "email") setEmail(newValue);
    if (inputId === "password") setPassword(newValue);
  };

  return (
    <>
      <form>
        <Input
          id="email"
          type="email"
          value={email}
          placeholder="email"
          handleChange={handleChange}
        ></Input>
        <Input
          id="password"
          type="password"
          value={password}
          placeholder="password"
          handleChange={handleChange}
        ></Input>
        <input type="button" value={"Login"}></input>
        <label>Don't have an account?</label>
        <Link to="/signup">Sign up here</Link>
      </form>
    </>
  );
}

function Input({ id, type, value, placeholder, handleChange }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => {
        handleChange(id, event.target.value);
      }}
    ></input>
  );
}

export default Login;
