import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { shape } from "@mui/system";
import React from "react";
import ToDoListType from "../../../Ts/Model";

interface Props {
  toDoArray: ToDoListType[];
  removeFrom: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
  moveTo: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
  toDoItemStyle: any;
}

export const PendingTodoList = ({
  toDoArray,
  removeFrom,
  moveTo,
  toDoItemStyle,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <Box style={{ marginBottom: "5%", textDecorationLine: "underline" }}>
        Pending Tasks
      </Box>
      <Box style={{ width: "100%" }}>
        {toDoArray.map((i: any) => (
          <Box sx={toDoItemStyle} key={i.key}>
            <MenuItem key={i.key} sx={styles.ToDoInput}>
              {i.input}
            </MenuItem>

            <Box>
              <CheckIcon
                sx={styles.ToDoControl}
                fontSize="small"
                onClick={() => {
                  moveTo((currentItem) => [
                    ...currentItem,
                    {
                      input: i.input,
                      key: toDoArray.length + i.input,
                      completed: false,
                    },
                  ]);
                  removeFrom(
                    toDoArray.filter((toDoArray) => toDoArray.key !== i.key)
                  );
                }}
              />
              <DeleteOutlineIcon
                sx={styles.ToDoControl}
                onClick={() =>
                  removeFrom(
                    toDoArray.filter((toDoArray) => toDoArray.key !== i.key)
                  )
                }
                fontSize="small"
              />
            </Box>
          </Box>
        ))}
      </Box>
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
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "primary.main",
      borderRadius: "5px",
    },
  },
};
