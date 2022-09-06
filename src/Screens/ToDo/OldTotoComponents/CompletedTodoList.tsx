import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import ToDoListType from "../../../Ts/Model";

interface Props {
  completedToDo: ToDoListType[];
  setTodo: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
  setCompletedToDo: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
}
export const CompletedTodoList = ({
  completedToDo,
  setTodo,
  setCompletedToDo,
}: Props) => {
  return (
    <Box style={{ width: "100%" }}>
      {completedToDo.map((i: any) => (
        <Box sx={styles.toDoItem}>
          <MenuItem key={i.key} sx={styles.ToDoInput}>
            {i.input}
          </MenuItem>
          <Box>
            <ReplayIcon
              sx={styles.ToDoControl}
              fontSize="small"
              onClick={() => {
                setCompletedToDo(
                  completedToDo.filter(
                    (completedToDo) => completedToDo.key !== i.key
                  )
                );
                setTodo((curentItem) => [
                  ...curentItem,
                  { input: i.input, key: i.key, completed: false },
                ]);
              }}
            />
            <DeleteOutlineIcon
              sx={styles.ToDoControl}
              onClick={() =>
                setCompletedToDo(
                  completedToDo.filter(
                    (completedToDo) => completedToDo.key !== i.key
                  )
                )
              }
              fontSize="small"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
const styles = {
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
    backgroundColor: "secondary.main",
    borderRadius: "5px",
    paddingLeft: "5px",
    marginBottom: "2%",
  },
  ToDoInput: {
    listStyleType: "none",
    cursor: "pointer",
    "&:hover": {
      cursor: "pointer",
    },
  },
  ToDoControl: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "secondary.dark",
      borderRadius: "5px",
    },
  },
};
