import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import ToDoListType from "../../../Ts/Model";

interface Props {
  toDoArray: ToDoListType[];
  removeFrom: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
  moveTo: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
  moveToDeleted: React.Dispatch<React.SetStateAction<ToDoListType[]>>;
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
  moveToDeleted,
  toDoItemStyle,
  buttonStyle,
}: Props) => {
  const poop = async () => {};
  const moveToCompleted = (input: string, key: string) => {
    fetch("https://krat.es/8681e82ae86318a999b9/completed", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        input: input,
        key: key,
      }),
    }).then((response) => {
      console.log(response);
    });
  };
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
          <Box sx={toDoItemStyle} key={i._id}>
            <MenuItem key={i._id} sx={styles.ToDoInput}>
              {i.input}
            </MenuItem>

            <Box //box for the two buttons on the to-do
              sx={styles.App}
            >
              <Box
                sx={buttonStyle}
                onClick={() => {
                  moveTo((currentItem) => [
                    //moves from the current state to the next
                    ...currentItem,
                    {
                      input: i.input,
                      _id: toDoArray.length + i.input,
                      completed: false,
                    },
                  ]);
                  removeFrom(
                    // remove from currentstate after moving to completed/back to to-do
                    toDoArray.filter((toDoArray) => toDoArray._id !== i._id)
                  );
                }}
              >
                {completedButton}
              </Box>
              <Box
                sx={buttonStyle}
                onClick={() => (
                  moveToDeleted((currentItem) => [
                    ...currentItem,
                    {
                      input: i.input,
                      _id: toDoArray.length + i.input,
                      completed: false,
                    },
                  ]),
                  removeFrom(
                    // removes from current state
                    toDoArray.filter((toDoArray) => toDoArray._id !== i._id)
                  ),
                  fetch(
                    "https://krat.es/2491831feac26db887a6/record/" + i._id,
                    {
                      method: "DELETE",
                      redirect: "follow",
                    }
                  )
                    .then((res) => res.text()) // or res.json()
                    .then((res) => console.log(res))
                )}
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
function moveToDeleted(arg0: (currentItem: any) => void): void {
  throw new Error("Function not implemented.");
}
