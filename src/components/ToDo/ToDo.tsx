import React, { useEffect } from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import ToDoListType from "../../Ts/Model";
import { Box, Button, Typography } from "@mui/material";
import { GrabInput } from "./components/GrabInput";
import { TodoList } from "./components/todoList";

export const ToDo = () => {
  const [toDo, setTodo] = useState<ToDoListType[]>([]);
  const [completedToDo, setCompletedToDO] = useState<ToDoListType[]>([]);
  const [deletedTodo, setDeletedTodo] = useState<ToDoListType[]>([]);
  const [todoModal, setTodoModal] = useState<boolean>(true);
  //Adds Items to the ToDo part
  useEffect(() => {
    const loadTodo = async () => {
      await fetch("https://krat.es/6685b8328aa899faddec/todo")
        .then((res) => res.json())
        .then((result) => {
          setTodo(result);
          console.log("this is running");
          console.log(result);
        });
    };
    loadTodo();
  }, []);
  // provide better keys for to-do elem->errors when making multiple to-dos with the same content
  return (
    <Box sx={styles.App}>
      <Box sx={styles.ToDoContainer}>
        <Box sx={styles.InputContainer}>
          <GrabInput
            setTodoModal={setTodoModal}
            setTodo={setTodo}
            toDo={toDo}
          />
        </Box>
        <Box
          sx={{
            textAlign: "start",
            color: "primary.main",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => setTodoModal(!todoModal)}
        >
          <Typography variant="caption">
            {todoModal ? "Deleted items" : "Todo List"}
          </Typography>
        </Box>

        {todoModal && ( // pending box
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: { xs: "center", sm: "space-between" },
            }}
          >
            <Box
              sx={styles.ToDoBox} // The container style for pending
            >
              <TodoList
                setstatus="Completed"
                deletestatus="Deleted"
                toDoItemStyle={styles.toDoItem} //to-do item styling
                buttonStyle={styles.ToDoControl} //hover effect and colors for the check buttom and delete
                completedButton={<CheckIcon fontSize="small" />}
                toDoArray={toDo} // In to be used as a "check" or return
                moveTo={setTodo} //move to this state
                removeFrom={setTodo} //remove from this one
                label="Pending" //the array where the to-do currently is
                moveToDeleted={setDeletedTodo}
              />
            </Box>

            <Box sx={styles.Completed}>
              <TodoList //completed box
                setstatus="Pending"
                deletestatus="Deleted"
                toDoItemStyle={styles.toDoItemCompleted}
                buttonStyle={styles.ToDoControlCompleted}
                completedButton={<ReplayIcon fontSize="small" />}
                moveTo={setTodo}
                removeFrom={setTodo}
                toDoArray={toDo}
                label="Completed"
                moveToDeleted={setDeletedTodo}
              />
            </Box>
          </Box>
        )}

        {todoModal === false && ( //completed
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Box
              sx={styles.deletedBox} // The container style for to-do
            >
              <TodoList
                setstatus="Pending"
                deletestatus="Deleted"
                toDoItemStyle={styles.toDoItem} //to-do item styling
                buttonStyle={styles.ToDoControl} //hover effect and colors for the check buttom and delete
                completedButton={<ReplayIcon fontSize="small" />}
                toDoArray={toDo} // In to be used as a "check" or return
                moveTo={setTodo} //move to this state
                removeFrom={setTodo} //remove from this one
                label={"Deleted"} //the array where the to-do currently is
                moveToDeleted={setDeletedTodo}
              />
            </Box>
          </Box>
        )}
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
    display: "flex",
    flexDirection: "column",
    gap: "5%",
    backgroundColor: "background.paper",
    minHeight: { xs: "60vh", sm: "50vh" },
    maxHeight: { xs: "800px", sm: "100vh" },
    width: { xs: "90vw", md: "50vw", lg: "600px", xl: "50vw" },
    borderRadius: "15px",
    padding: "1%",
  },
  InputContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  ToDoBox: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#212121",
    minHeight: { xs: "20vh", sm: "40vh" },
    maxHeight: { xs: "400px", sm: "50vh" },
    width: { xs: "96%", sm: "45%" },
    backgroundColor: "secondary.main",
    borderRadius: "10px",
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
      borderRadius: "2px",
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
      borderRadius: "2px",
    },
  },
  Completed: {
    display: "flex",
    marginTop: "10px",
    flexDirection: "column",
    alignItems: "center",
    color: "#212121",
    backgroundColor: "primary.dark",
    borderRadius: "10px",
    padding: "2%",
    minHeight: { xs: "20vh", sm: "40vh" },
    maxHeight: { xs: "400px", sm: "50vh" },
    width: { xs: "96%", sm: "45%" },
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
      overflow: "scroll",
    },
  },
  deletedBox: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    color: "#212121",
    minHeight: { xs: "40vh", sm: "30vh" },
    maxHeight: { xs: "400px", sm: "50vh" },
    width: "50%",
    backgroundColor: "secondary.main",
    borderRadius: "15px",
    padding: "2%",
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
      overflow: "scroll",
    },
  },
};
