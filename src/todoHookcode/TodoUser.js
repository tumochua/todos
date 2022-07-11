import React from "react";
import { useState } from "react";
function TodoUser(props) {
  const [inputUser, setInputUser] = useState("");
  const handleOnclick = () => {
    let userId = { id: Math.floor(Math.random() * 100), name: inputUser };
    props.handleAddUser(userId);
    setInputUser("");
  };
  return (
    <>
      <input value={inputUser} onChange={(e) => setInputUser(e.target.value)} />
      <button onClick={handleOnclick}>add</button>
    </>
  );
}
export default TodoUser;
