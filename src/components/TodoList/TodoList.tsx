import React from "react";
import styles from "./todoList.module.css";
import { Todo } from "../../types";
import SingleTodo from "../SingleTodo/SingleTodo";

// Type definitions for the Props
interface Props {
  allTasks: Todo[];
  setAllTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ allTasks, setAllTasks }: Props) => {
  return (
    <div className={styles.taskContainer}>
      {/* List all the task present in allTask */}
      {allTasks.map((singleTask) => (
        <SingleTodo
          key={singleTask.id}
          singleTask={singleTask}
          allTasks={allTasks}
          setAllTasks={setAllTasks}
        />
      ))}
    </div>
  );
};

export default TodoList;
