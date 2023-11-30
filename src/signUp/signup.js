import axios from "axios";
import { useState, useEffect } from "react";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";

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

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const navigate = useNavigate();

  const handleChange = (inputId, newValue) => {
    if (inputId === "email") setEmail(newValue);
    if (inputId === "password") setPassword(newValue);
    if (inputId === "username") setUsername(newValue);
    if (inputId === "name") setName(newValue);
  };

  useEffect(() => {
    // Update buttonState after the component has rendered
    if (email !== "" && password !== "" && username !== "" && name !== "") {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }, [email, password, username, name]);

  const handleClick = (event) => {
    //event.preventDefault();
    console.log("Sign up button clicked!");
    if (email && password && username && name) {
      navigate("/");
    } else {
      setTimeout(() => {}, 3000);
    }
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
        <Input
          id="username"
          type="text"
          value={username}
          placeholder="username"
          handleChange={handleChange}
        ></Input>
        <Input
          id="name"
          type="text"
          value={name}
          placeholder="name"
          handleChange={handleChange}
        ></Input>

        <input type="submit" value="Sign Up" onClick={handleClick} />
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

function SignUpButton() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Sign up button clicked!");
    navigate("/");
  };
  return <input type="submit" value="Sign Up" onClick={handleClick} />;
}

function InvalidCredentials() {
  return <div>Invalid Credentials</div>;
}

export default Signup;
