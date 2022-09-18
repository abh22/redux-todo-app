import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, statusTodo } from "../JS/actions/actions";
import "./Task.css";
import { Button, Card } from "@mui/material";
export default function Task({ task }) {
  const [editedText, setEditedText] = useState(task.text);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editTodo(task.id, editedText));
    setEdit(false);
  };
  const handleDone = (id) => {
    dispatch(statusTodo(id));
  };
  const handleCancel = () => {
    setEdit(false);
    setEditedText(task.text);
  };
  return (
    <div key={task.id}>
      {edit ? (
        <Card variant="outlined">
          <input
            style={{ backgroundColor: "#f3e5f5", color: "purple" }}
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </Card>
      ) : (
        <span
          style={{ backgroundColor: "#ce93d8", color: "purple" }}
          className={task.done ? "textDone" : null}
        >
          {task.text}
        </span>
      )}

      <Button onClick={() => setEdit(true)} color="secondary">
        Edit
      </Button>

      <Button onClick={() => handleDone(task.id)} color="success">
        {task.done ? "undone" : "done"}
      </Button>
    </div>
  );
}
