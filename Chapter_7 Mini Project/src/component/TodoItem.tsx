import { useState, useRef, useEffect } from "react";
import {
  Paper,
  Typography,
  Stack,
  Checkbox,
  Button,
  TextField,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { Save } from "lucide-react";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
  editHandler: (id: string, newTitle: string) => void;
};

const TodoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(todo.title);
  const textFeildRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editActive && textFeildRef.current) {
      textFeildRef.current?.focus();
    }
  }, [editActive]);

  return (
    <Paper variant="outlined" sx={{ padding: "5px" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => completeHandler(todo.id)}
        />
        {editActive ? (
          <TextField
            inputRef={textFeildRef}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && newTitle.trim() !== "") {
                editHandler(todo.id, newTitle);
                setEditActive(false);
              }
            }}
          />
        ) : (
          <Typography marginRight={"auto"}>{todo.title}</Typography>
        )}

        <Button onClick={() => setEditActive((prev: boolean) => !prev)}>
          {editActive ? <Save /> : <Edit />}
        </Button>
        <Button onClick={() => deleteHandler(todo.id)}>
          <Delete />
        </Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
