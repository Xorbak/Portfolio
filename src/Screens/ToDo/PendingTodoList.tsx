import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import ToDoListType from "../../Ts/Model";

interface Props {
  toDo: ToDoListType[];
  setTodo: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
  setCompletedToDO: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
}

export const PendingTodoList = ({ toDo, setTodo, setCompletedToDO }: Props) => {
  return (
    <Box style={{ width: "100%" }}>
      {toDo.map((i: any) => (
        <Box sx={styles.toDoItem} key={i.key}>
          <MenuItem key={i.key} sx={styles.ToDoInput}>
            {i.input}
          </MenuItem>

          <Box>
            <CheckIcon
              sx={styles.ToDoControl}
              fontSize="small"
              onClick={() => {
                setCompletedToDO((currentItem) => [
                  ...currentItem,
                  {
                    input: i.input,
                    key: toDo.length + i.input,
                    completed: false,
                  },
                ]);
                setTodo(toDo.filter((toDo) => toDo.key !== i.key));
              }}
            />
            <DeleteOutlineIcon
              sx={styles.ToDoControl}
              onClick={() => setTodo(toDo.filter((toDo) => toDo.key !== i.key))}
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
    backgroundColor: "primary.dark",
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
    "&:hover": { cursor: "pointer", backgroundColor: "primary.main" },
  },
};
