import React, { useState } from "react";
import ListStyled from "./list.styles";
import AddToDoButton from "../form/AddTask";
import Task from "../item/Task";
import Search from "../../../../commons/filtros/search/Search";

const List = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("Suas tarefas")) || []
  );

  const addTask = (title) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        title: title,
        isCompleted: false,
      },
    ];

    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const toggleItemCompleted = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTasks);
  };

  const [search, setSearch] = useState("");

  return (
    <>
      <ListStyled>
        <div className="main">
          <div className="header">
            <AddToDoButton addTask={addTask} />
            <Search search={search} setSearch={setSearch} />
          </div>
          
          <div className="labelToDo">
            <img
              src="/label.svg"
              alt="Label desenhada a mão com preenchimento azul e escrito em preto a fase To Do"
            />
          </div>

          <div className="container">
            <div className="listContainer">
              <ul>
                {tasks
                  .filter((task) =>
                    task.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(({ id, title, isCompleted }) => (
                    <Task
                      key={id}
                      id={id}
                      title={title}
                      isCompleted={isCompleted}
                      toggleItemCompleted={toggleItemCompleted}
                      removeTask={removeTask}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </ListStyled>
    </>
  );
};

export default List;
