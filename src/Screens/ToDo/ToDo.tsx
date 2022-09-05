import React, { useEffect } from "react";
import GrabInput from "../../components/GrabInput";
import { CompletedTodoList } from "./CompletedTodoList";
import { useState } from "react";
import ToDoListType from "../../Ts/Model";
import { Box } from "@mui/material";
import { PendingTodoList } from "./PendingTodoList";

export const ToDo = () => {
  const [toDo, setTodo] = useState<ToDoListType[]>([]);
  const [completedToDo, setCompletedToDO] = useState<ToDoListType[]>([]);

  //Adds Items to the ToDo part

  //Local Storage

  useEffect(() => {
    console.log("get");
    const pending = localStorage.getItem("pending");
    const completed = localStorage.getItem("completed");
    if (pending) {
      setTodo(JSON.parse(pending));
    }
    if (completed) {
      setCompletedToDO(JSON.parse(completed));
    }
  }, []);

  return (
    <Box sx={styles.App}>
      <Box sx={styles.ToDoContainer}>
        <Box sx={styles.InputContainer}>
          <GrabInput setTodo={setTodo} toDo={toDo} />
        </Box>

        <Box sx={styles.ToDoBox}>
          <Box style={{ marginBottom: "5%", textDecorationLine: "underline" }}>
            Pending Tasks
          </Box>
          <PendingTodoList
            setCompletedToDO={setCompletedToDO}
            setTodo={setTodo}
            toDo={toDo}
          />
        </Box>
        <Box sx={styles.Completed}>
          <Box style={{ marginBottom: "5%", textDecorationLine: "underline" }}>
            Completed Tasks
          </Box>
          <CompletedTodoList
            completedToDo={completedToDo}
            setTodo={setTodo}
            setCompletedToDo={setCompletedToDO}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  App: {
    textAlign: "center",
    backgroundColor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  ToDoContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "80px",
    gridAutoRows: "minmax(10px, auto)",
    gap: "5%",
    backgroundColor: "background.paper",
    minHeight: "50vh",
    maxHeight: "80vh",
    width: "50vw",
    borderRadius: "5px",
    padding: "1%",
    "@media (max-width:800px)": {
      width: "90vw",
      padding: "1%",
      paddingTop: "5%",
    },
  },
  InputContainer: {
    gridColumnStart: "1",
    gridColumnEnd: "-1",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  ToDoBox: {
    gridColumn: "span 2",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "#212121",
    backgroundColor: "secondary.main",
    borderRadius: "5px",
    padding: "2%",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
      overflow: "scroll",
    },
  },
  Completed: {
    gridColumn: "span 2",
    display: "flex",
    marginTop: "10px",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "#212121",
    backgroundColor: "primary.dark",
    borderRadius: "5px",
    padding: "2%",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
      overflow: "scroll",
    },
  },
};
