import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
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
  setstatus: string;
  deletestatus: string;
}

const movetodo = (_id: string | undefined, status: string) => {
  const options = {
    method: "GET",
    url: "http://localhost:5000/todo/update",
    params: { _id: _id, status: status },
  };

  axios.request(options).then((res) => console.log(res.data));
  console.log("moved");
  console.log(_id);
};

const deletetodo = (_id: string | undefined) => {
  const options = {
    method: "GET",
    url: "https://xorprod.herokuapp.com/todo/delete",
    params: { _id: _id },
  };
  axios.request(options).then((res) => console.log(res.data));
  console.log("deleted");
  console.log(_id);
};
export const TodoList = ({
  label,
  completedButton,
  toDoArray,
  removeFrom,
  moveTo,
  moveToDeleted,
  toDoItemStyle,
  buttonStyle,
  setstatus,
  deletestatus,
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
        {toDoArray.map((i: ToDoListType) => (
          <Box>
            {i.status === label && ( //add the conditional rendering here
              <Box sx={toDoItemStyle} key={i._id}>
                <MenuItem sx={styles.ToDoInput}>{i.input}</MenuItem>

                <Box //box for the two buttons on the to-do
                  sx={styles.App}
                >
                  <Box // check and reload button
                    sx={buttonStyle}
                    onClick={() => {
                      removeFrom(
                        //deletes the object with the current status
                        toDoArray.filter((toDoArray) => toDoArray._id !== i._id)
                      );
                      moveTo((currentItem) => [
                        // makes a new object to have the new status
                        ...currentItem,
                        {
                          input: i.input,
                          _id: i._id,
                          status: setstatus,
                        },
                      ]);

                      console.log(toDoArray);
                      movetodo(i._id, setstatus);
                    }}
                  >
                    {completedButton}
                  </Box>
                  <Box //trashcan button
                    sx={buttonStyle}
                    onClick={() =>
                      i.status !== deletestatus
                        ? (removeFrom(
                            //deletes the object with the current status
                            toDoArray.filter(
                              (toDoArray) => toDoArray._id !== i._id
                            )
                          ),
                          moveTo((currentItem) => [
                            // makes a new object to have the new status
                            ...currentItem,
                            {
                              input: i.input,
                              _id: i._id,
                              status: deletestatus,
                            },
                          ]),
                          console.log(toDoArray),
                          movetodo(i._id, deletestatus))
                        : (removeFrom(
                            // if its in the deleted box just delete the thing

                            toDoArray.filter(
                              (toDoArray) => toDoArray._id !== i._id
                            )
                          ),
                          deletetodo(i._id))
                    }
                  >
                    <DeleteOutlineIcon fontSize="small" />
                  </Box>
                </Box>
              </Box>
            )}
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
