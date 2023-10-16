import { useState } from "react";
import { MdAdd } from "react-icons/md";
import AddTaskStyled from "./addTask.styles";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (!title) return;
    addTask(title);
    setTitle("");
  };

  return (
    <AddTaskStyled>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={title}
        onChange={(evento) => setTitle(evento.target.value)}
      />
      <button type="submit">
        <MdAdd className="searchIcon" />
      </button>
    </form>
    </AddTaskStyled>
  );
};

export default AddTask;