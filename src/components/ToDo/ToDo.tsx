import React, { useEffect } from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import ToDoListType from "../../Ts/Model";
import { Box } from "@mui/material";
import { GrabInput } from "./components/GrabInput";
import { TodoList } from "./components/todoList";

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
  // provide better keys for to-do elem->errors when making multiple to-dos with the same content
  return (
    <Box sx={styles.App}>
      <Box sx={styles.ToDoContainer}>
        <Box sx={styles.InputContainer}>
          <GrabInput setTodo={setTodo} toDo={toDo} />
        </Box>

        <Box
          sx={styles.ToDoBox} // The container style for to-do
        >
          <TodoList
            toDoItemStyle={styles.toDoItem} //to-do item styling
            buttonStyle={styles.ToDoControl} //hover effect and colors for the check buttom and delete
            completedButton={<CheckIcon fontSize="small" />}
            toDoArray={toDo} // In to be used as a "check" or return
            moveTo={setCompletedToDO} //move to this state
            removeFrom={setTodo} //remove from this one
            label={"Pending Task"} //the array where the to-do currently is
          />
        </Box>

        <Box sx={styles.Completed}>
          <TodoList
            toDoItemStyle={styles.toDoItemCompleted}
            buttonStyle={styles.ToDoControlCompleted}
            completedButton={<ReplayIcon fontSize="small" />}
            moveTo={setTodo}
            removeFrom={setCompletedToDO}
            toDoArray={completedToDo}
            label={"Completed Tasks"}
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
    gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr 1fr" },
    gridTemplateRows: "80px",
    gridAutoRows: "minmax(10px, auto)",
    gap: "5%",
    backgroundColor: "background.paper",
    minHeight: { xs: "60vh", sm: "50vh" },
    maxHeight: { xs: "800px", sm: "100vh" },
    width: { xs: "90vw", md: "50vw", lg: "600px" },
    borderRadius: "5px",
    padding: "1%",
  },
  InputContainer: {
    gridColumnStart: "1",
    gridColumnEnd: "-1",
    display: "flex",
    width: "100%",
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
    minHeight: { xs: "30vh", sm: "20vh" },
    maxHeight: { xs: "400px", sm: "50vh" },
    backgroundColor: "secondary.main",
    borderRadius: "5px",
    padding: "2%",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
      overflow: "scroll",
    },
  },
  ToDoControl: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "primary.main",
      borderRadius: "5px",
    },
  },
  toDoItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingRight: "2%",
    fontSize: "15px",
    border: "1px solid #d7d7d7",
    boxShadow: "#0d7377",
    backgroundColor: "primary.dark",
    borderRadius: "5px",
    paddingLeft: "5px",
    marginBottom: "2%",
  },
  toDoItemCompleted: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    paddingRight: "2%",
    fontSize: "15px",
    border: "1px solid #d7d7d7",
    boxShadow: "#0d7377",
    backgroundColor: "secondary.main",
    borderRadius: "5px",
    paddingLeft: "5px",
    marginBottom: "2%",
  },
  ToDoControlCompleted: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "secondary.dark",
      borderRadius: "5px",
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
    minHeight: { xs: "30vh", sm: "20vh" },
    maxHeight: { xs: "400px", sm: "50vh" },
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
      overflow: "scroll",
    },
  },
};
