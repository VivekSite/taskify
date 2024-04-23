import React, { useState } from "react";
import styles from "./singleTodo.module.css";
import { Todo } from "../../types";
import { MdDone, MdEdit, MdDelete, MdCloudDone } from "react-icons/md";

// Type definitions for the Props
interface Props {
  singleTask: Todo;
  allTasks: Todo[];
  setAllTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ singleTask, allTasks, setAllTasks }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(singleTask.task);

  // Function for handling Deleteion of task
  const handleDeleteTask = (id: number) => {
    setAllTasks(allTasks.filter((task) => task.id !== id));
  };

  // Function for handling completed task
  const handleTaskDone = (id: number) => {
    setAllTasks(
      allTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Function for Saving edited task
  const saveEditedTask = (id: number) => {
    setAllTasks(allTasks.map((task) => task.id === id ? { ...task, task: editTask} : task));
    setIsEditing(false);
  }

  return (
    <form className={styles.SingleTaskForm}>
      {/*---------- Input to show the task ----------*/}
      <input
        type="text"
        value={editTask}
        disabled={!isEditing}
        className={styles.SingleTodoInput}
        onChange={(e) => setEditTask(e.target.value)}
        style={{backgroundColor: isEditing ? "white" : "rgb(67, 230, 230)"}}
      />

      <div className={styles.actionButtons}>
        {/*--------------- Conditionally render Save and Edit Icons ---------------*/}
        {isEditing ? (
          <span
            className={styles.Icons}
            onClick={() => saveEditedTask(singleTask.id)}
          >
            <MdCloudDone />
          </span>
        ) : (
          <span
            className={styles.Icons}
            onClick={() => !singleTask.isCompleted && setIsEditing(!isEditing)}
          >
            <MdEdit />
          </span>
        )}

        {/*--------------- Done button ---------------*/}
        <span
          className={styles.Icons}
          onClick={() => handleTaskDone(singleTask.id)}
          style={{
            backgroundColor: singleTask.isCompleted
              ? "green"
              : "rgb(67, 230, 230)",
            color: singleTask.isCompleted ? "white" : "green",
          }}
        >
          <MdDone />
        </span>
        {/*-------------- Delete Button --------------*/}
        <span
          className={styles.Icons}
          onClick={() => handleDeleteTask(singleTask.id)}
        >
          <MdDelete />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
