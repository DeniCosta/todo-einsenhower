import { useState } from "react";
import ItemStyled from "./task.styles";
import { CheckButtonStyled } from "../../../../commons/checkButton/checkButton.styles";
import { MdCheck } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Task = ({ id, title, removeTask }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  
  const handleCompleteClick = () => {
    setIsCompleted(!isCompleted);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveEdit(); // Salva as alterações ao pressionar "Enter"
    }
  };

  return (
    <ItemStyled>
      <CheckButtonStyled
        isCompleted={isCompleted}
        onClick={handleCompleteClick}
      >
        <MdCheck />
      </CheckButtonStyled>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={handleTitleChange}
          onBlur={handleSaveEdit}
          onKeyDown={handleKeyDown} // Salva as alterações ao pressionar "Enter"
          autoFocus
        />
      ) : (
        <div
          onClick={handleEditClick}
          style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        >
          {editedTitle}
        </div>
      )}
      <MdDeleteOutline
        style={{ color: "#F2CAE1", cursor: "pointer" }}
        onClick={() => removeTask(id)}
      />
    </ItemStyled>
  );
};

export default Task;
