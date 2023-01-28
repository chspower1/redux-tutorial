import { Action, createStore } from "redux";
interface ToDoAction extends Action {
  id: number;
  text: string;
  date: Date;
}

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text: string) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (id: number) => {
  return {
    type: DELETE,
    id,
  };
};
const reducer = (state: ToDoAction[] = [], action: ToDoAction) => {
  switch (action.type) {
    case ADD:
      return [...state, { id: state.length + 1, text: action.text, date: Date.now() }];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return [];
  }
};
const store = createStore(reducer);

store.subscribe();

export default store;
