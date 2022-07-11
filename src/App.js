import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TodoClass from "./todoclass/TodoClass";
import TodoHook from "./todohook/TodoHook";
import TodoClassCode from "./TodoClassCode/TodoClassCode";
import TodoHookCode from "./todoHookcode/TodoHookCode";
import Todos from "./components/Todo/Todos";
import Navbar from "./components/Todo/Navbar";
import TodosRedux from "./components/Todo/Todos";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import TodoCodeNho from "./components/Todo-Code-nho/TodoCodeNho";
// import Navbar from "./components/Todo-Code-nho/Navbar";
// import TodoUser from "./todoHookcode/TodoUser";
import TodoCodeNhoRedux from "./components/Todo-Code-nho/TodoCodeNho";
import NavbarCodeNho from "./components/Todo-Code-nho/NavbarCodeNho";
// function App() {
//   return (
//     <>
//       {/* <div>
//         <nav>
//           <ul style={{ display: "flex", justifyContent: "space-around" }}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/class">class</Link>
//             </li>
//             <li>
//               <Link to="/hook">hook</Link>
//             </li>
//             <li>
//               <Link to="/hook-code">hook code</Link>
//             </li>
//             <li>
//               <Link to="/class-code">code</Link>
//             </li>
//             <li>{/* <Link to="/todo-redux">Redux</Link> */}</li>
//             <li>
//               <Link to="/redux-code-nho">Redux-code-nho</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/hook" element={<TodoHook></TodoHook>}></Route>
//           <Route path="/hook-code" element={<TodoHookCode />}></Route>
//           <Route path="/class" element={<TodoClass></TodoClass>}></Route>
//           <Route path="/class-code" element={<TodoClassCode />}></Route>
//           <Route path="/redux-code-nho" element={<TodoCodeNhoRedux />}></Route>
//         </Routes>
//       </div>
//       <Provider store={store}>
//         <div className="App">
//           <NavbarCodeNho />
//           <TodoCodeNhoRedux />
//         </div>
//       </Provider> */}
//     </>
//   );
// }
function App(){
  return(
    <>
    <TodoHook/>
    </>
  )
}

export default App;
