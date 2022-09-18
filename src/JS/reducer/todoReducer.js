
import {
  ADD_TODO,
  EDIT_TODO,
  STATUS_TODO,
} from "../actionTypes/actionTypes";
const initialState = {
    todoList: [
      { id: Math.random(), text: "learn React", done: false },
      { id: Math.random(), text: "learn Redux", done: false },
    ],
  };
  const todoReducer =(state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
          // return {    state, action : {type, payload}          }
          return { ...state, todoList: [...state.todoList, action.payload] };
        case EDIT_TODO:
            return{...state, todoList: state.todoList.map((todo) =>
                todo.id == action.payload.id
                  ? { ...todo, text: action.payload.textEdited }
                  : todo
              ),}
              case STATUS_TODO:
                return {
                  ...state,
                  todoList: state.todoList.map((todo) =>
                    todo.id == action.payload ? { ...todo, done: !todo.done } : todo
                  ),
                };
                default:
                    return state;
                }
              };
              
              export default todoReducer;
     