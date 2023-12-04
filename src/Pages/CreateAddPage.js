import { useState } from "react";

function CreateAddPage() {
  const [name, setName] = useState("");
  const [radioOption, setRadioOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handler function for name input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  // Handler function for radio button change
  const handleRadioChange = (event) => {
    setRadioOption(event.target.value);
    console.log(event.target.value);
  };

  // Handler function for checkbox change
  const handleCheckboxChange = (value) => {
    if (selectedOptions.includes(value)) {
      // If the option is already selected, remove it from the array
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      // If the option is not selected, add it to the array
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div>
      <form>
        <label>Name:</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        ></input>

        <br></br>

        <label>Selling or buying:</label>
        <label>
          <input
            type="radio"
            value="for_sale"
            checked={radioOption === "for_sale"}
            onChange={handleRadioChange}
          />
          For sale
        </label>
        <label>
          <input
            type="radio"
            value="looking_to_buy"
            checked={radioOption === "looking_to_buy"}
            onChange={handleRadioChange}
          />
          Looking to buy
        </label>
        <br></br>
        <label>Tags:</label>

        <div>
          <input
            type="checkbox"
            id="Motor"
            value="Motor"
            checked={selectedOptions.includes("Motor")}
            onChange={() => handleCheckboxChange("Motor")}
          />
          <label htmlFor="Motor">Motor</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="Work"
            value="Work"
            checked={selectedOptions.includes("Work")}
            onChange={() => handleCheckboxChange("Work")}
          />
          <label htmlFor="Work">Work</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="Lifestyle"
            value="Lifestyle"
            checked={selectedOptions.includes("Lifestyle")}
            onChange={() => handleCheckboxChange("Lifestyle")}
          />
          <label htmlFor="Lifestyle">Lifestyle</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="Electronics"
            value="Electronics"
            checked={selectedOptions.includes("Electronics")}
            onChange={() => handleCheckboxChange("Electronics")}
          />
          <label htmlFor="Electronics">Electronics</label>
        </div>

        <p>Selected Options: {selectedOptions.join(", ")}</p>
      </form>
    </div>
  );
}

export default CreateAddPage;
