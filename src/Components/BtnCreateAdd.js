import { useNavigate } from "react-router-dom";

function BtnCreateAdd() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate("/new");
  };

  return <button onClick={handleClick}>Create Add</button>;
}

export default BtnCreateAdd;
