import { useContext } from "react";
import { ThemeContext } from "./Hooks/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="boxContainer"
      style={{
        backgroundColor: theme === "dark" ? "black" : "wheat",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h1>Box 1</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Home;
