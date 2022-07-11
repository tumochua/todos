// gộp tất cả các reducers => nếu có nhiều reducers thì rất tiện lợi
import { combineReducers } from "redux";
import todoReducers from "../reducers/todoReducer";

const rootReducers = combineReducers({
  myTodos: todoReducers,
});
export default rootReducers;
