import {
    ADD_TODO,
   
    EDIT_TODO,
    STATUS_TODO,
  } from "../actionTypes/actionTypes";
  export const addTodo = (newTodo) => {
    return {
      type: ADD_TODO,
      payload: newTodo,
    };
  };
  
  
  export const editTodo=(id,textEdited) =>{
    return {
        type:EDIT_TODO,
        payload:{id,textEdited},
    };
      
    
  };
  export const statusTodo = (id) => {
    return {
      type: STATUS_TODO,
      payload: id,
    };
  };