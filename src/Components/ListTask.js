import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import Task from "./Task";
import './Task.css'
import { Button,ButtonGroup,Container } from "@mui/material";
const ListTask = () => {
  const [filter, setFilter] = useState("all");
  const todos = useSelector((store) => store.todoReducer.todoList);
  return (
    <Container maxWidth="sm">
      <AddTask />

     
      <ButtonGroup variant="text" aria-label="text button group" style={{margin:30}}>
  <Button onClick={() => setFilter("all")}>All</Button>
  <Button onClick={() => setFilter("done")}>Done</Button>
  <Button onClick={() => setFilter("undone")}>Undone</Button>
</ButtonGroup >

      {filter == "done"
        ? todos
            .filter((todo) => todo.done === true)
            .map((todo) => <Task  key={todo.id} task={todo} />)
        : filter == "undone"
        ? todos
            .filter((todo) => todo.done === false)
            .map((todo) => <Task key={todo.id} task={todo} />)
        : todos.map((todo) => <Task key={todo.id} task={todo} />)}
    </Container>
  );
};

export default ListTask;