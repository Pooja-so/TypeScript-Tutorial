import {
  Container,
  // AppBar,
  // Toolbar,
  // Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { useState, type FormEvent } from "react";
import TodoItem from "./component/TodoItem";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [title, setTitle] = useState<string>("");

  const addTaskHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a task!");
    }

    // Create a todo item
    const todo: TodoItemType = {
      id: crypto.randomUUID(),
      title: title,
      isCompleted: false,
    };

    // Push the task into the todos
    setTodos((prev) => [...prev, todo]);

    // Empty the task
    setTitle("");
  };

  const completeHandler = (id: string): void => {
    const newTodos: TodoItemType[] = todos.map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };

  const editHandler = (id: string, newTitle: string): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.title = newTitle;
      return todo;
    });j
    setTodos(newTodos);
  };

  return (
    <Container sx={{ height: "100vh", padding: "1rem" }}>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar> */}
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2px",
        }}
        onSubmit={addTaskHandler}
      >
        <TextField
          fullWidth
          label={"New task"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </form>

      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default App;
