import React from "react";
import { useState } from "react";
import TodoUser from "./TodoUser";
function TodoHookCode() {
  const [uses, setUsers] = useState([]);
  const handleAddUser = (user) => {
    // setCourse((course) => [...course, newCourse]);
    setUsers((usesName) => [...usesName, user]);
    console.log(uses);
  };
  const handleDeleteUser = (user) => {
    setUsers(uses.filter((item) => item.id !== user.id));
  };
  return (
    <>
      <div>
        {uses &&
          uses.length > 0 &&
          uses.map((item, index) => {
            return (
              <>
                <div key={item.id} style={{ display: "flex" }}>
                  {item.name}
                  <button onClick={() => handleDeleteUser(item)}>delete</button>
                </div>
              </>
            );
          })}
        <TodoUser handleAddUser={handleAddUser} />
      </div>
    </>
  );
}
export default TodoHookCode;
