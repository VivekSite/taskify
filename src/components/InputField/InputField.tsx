import React from "react";
import styles from "./InputField.module.css";

// Type definitions for the Props
interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({ task, setTask, handleAddTask }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        handleAddTask(e);
      }}
      className={styles.taskForm}
    >
      {/*-------------- Input element for adding new task --------------*/}
      <input
        type="text"
        className={styles.taskInput}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/*-------------- Submit button for adding new task --------------*/}
      <button type="submit" className={styles.submitButton}>
        Add
      </button>
    </form>
  );
};

export default InputField;
