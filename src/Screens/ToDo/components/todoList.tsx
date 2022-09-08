import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import ToDoListType from "../../../Ts/Model";

interface Props {
  toDoArray: ToDoListType[];
  removeFrom: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
  moveTo: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
  toDoItemStyle: any;
  label: string;
  buttonStyle: any;
  completedButton: any;
}

export const TodoList = ({
  label,
  completedButton,
  toDoArray,
  removeFrom,
  moveTo,
  toDoItemStyle,
  buttonStyle,
}: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box // styling for the title
        style={{
          marginBottom: "5%",
          textDecorationLine: "underline",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {label}
      </Box>
      <Box
        style={{ width: "100%" }} //fullWidth for the to-do item
      >
        {toDoArray.map((i: any) => (
          <Box sx={toDoItemStyle} key={i.key}>
            <MenuItem key={i.key} sx={styles.ToDoInput}>
              {i.input}
            </MenuItem>

            <Box //box for the two buttons on the to-do
              sx={styles.App}
            >
              <Box
                sx={buttonStyle}
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
              >
                {completedButton}
              </Box>
              <Box
                sx={buttonStyle}
                onClick={() =>
                  removeFrom(
                    toDoArray.filter((toDoArray) => toDoArray.key !== i.key)
                  )
                }
              >
                <DeleteOutlineIcon fontSize="small" />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const styles = {
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
  App: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
};
