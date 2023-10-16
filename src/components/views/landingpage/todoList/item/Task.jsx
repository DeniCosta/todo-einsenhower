import { useState } from "react";
import ItemStyled from "./task.styles";
import { CheckButtonStyled } from "../../../../commons/checkButton/checkButton.styles";
import { MdCheck } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Task = ({ id, title, isCompleted, toggleItemCompleted, removeTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

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
      handleSaveEdit();
    }
  };

  return (
    <ItemStyled>
      <CheckButtonStyled
        isCompleted={isCompleted}
        onClick={() => toggleItemCompleted(id)}
      >
        <MdCheck />
      </CheckButtonStyled>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={handleTitleChange}
          onBlur={handleSaveEdit}
          onKeyDown={handleKeyDown}
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
