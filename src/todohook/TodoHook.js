import React from "react";
import { useState } from "react";

import Course from "./Course";

function TodoHook() {
  const [course, setCourse] = useState([{ id: 1, name: "tumochua" }]);
  const handlAddCourse = (item) => {
    const newCourse = { id: Math.floor(Math.random() * 100), name: item };
    setCourse((course) => [...course, newCourse]);
    console.log(course);
  };
  const handleDeleteCourse = (e) => {
    setCourse(course.filter((item) => item.id !== e.id));
  };
  return (
    <>
      {course &&
        course.length > 0 &&
        course.map((item) => {
          return (
            <>
              <div key={item.id} style={{ display: "flex" }}>
                {item.name}
                <button onClick={() => handleDeleteCourse(item)}>x</button>
              </div>
            </>
          );
        })}
      <Course handlAddCourse={handlAddCourse} course={course} />
    </>
  );
}
export default TodoHook;
