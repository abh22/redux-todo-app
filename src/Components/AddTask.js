import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../JS/actions/actions";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

const AddTask = () => {
  const [text, setText] = useState("Add your todo");
  const dispatch = useDispatch();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    dispatch(addTodo({ id: Math.random(), text: text, done: false }));
  };

  return (
   
    <div style={{marginTop:60}}>
      {/* <input type="text" onChange={handleText} value={text} /> */}
      <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  defaultValue="Small"
  variant="filled"
  size="small"
  onChange={handleText} value={text}
/>

      <Button variant="contained" onClick={handleAdd}>Add</Button>
    </div>
  );
};

export default AddTask;