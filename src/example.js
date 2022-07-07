import { useState } from "react";

function TicTacToe(props) {
  //khai bao state: getter |setter
    const [firstName, setfirstName] = useState("");
    const[lastName, setLastName] = useState("");

  const greeting = () => {
    alert(firstName + ' ' +lastName);
  };

  const handleFirstNameChange = (e) => {
    setfirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  return (
    <div>
      <h3>helooo, {props.name}</h3>
      {/* bind event */}
      <label>First Name:</label>
      <input onChange={(e) => handleFirstNameChange(e)}></input>

      <br />
      <label>Last Name:</label>
      <input onChange={(e) => handleLastNameChange(e)}></input>
          <button onClick={(e) => greeting()}>button</button>
          
          <h3>
              name: {firstName}, {lastName}
          </h3>
    </div>
  );
}

export default TicTacToe;
