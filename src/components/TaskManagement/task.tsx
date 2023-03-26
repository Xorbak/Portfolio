import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import axios from "axios";
import { TaskContainerDropdown } from "./taskContainerDropdown";
import { TaskContainers, Tasks } from "../../Screens/TaskManagement";
interface Props {
  content: string;
  setTask: React.Dispatch<React.SetStateAction<Tasks[]>>;
  taskContainers: TaskContainers[];
  task: Tasks[];
  id: string;
  parentContainer: string;
}
interface MoveTaskInterface {
  taskId: string;
  moveTo: string;
}
export const Task = ({
  content,
  id,
  taskContainers,
  setTask,
  task,
  parentContainer,
}: Props) => {
  const moveTask = (taskId: string, moveTo: string) => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/manage/update",
      params: { task_id: taskId, container: moveTo },
    };

    axios.request(options).then((res) => {
      console.log(res);
      console.log("removed");
    });
  };
  return (
    <Grid
      xs={11}
      container
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        border: "1px solid",
        borderColor: "primary.dark",
        borderRadius: "5px",
        backgroundColor: "primary.dark",
      }}
    >
      <Grid xs={8} lg={7} item>
        <Typography display={"flex"} sx={{ marginLeft: "10px" }}>
          {content}
        </Typography>
      </Grid>

      <Grid
        xs={4}
        container
        item
        flexDirection={"row"}
        justifyContent={"flex-end"}
      >
        <TaskContainerDropdown
          parentContainer={parentContainer}
          content={content}
          task={task}
          setTask={setTask}
          taskId={id}
          moveTask={moveTask}
          taskContainers={taskContainers}
        />
        <IconButton
          onClick={() => {
            moveTask(id, "removed");
            setTask(task.filter((currentItem) => currentItem.task_id != id));
            setTask((currentItem) => [
              ...currentItem,
              {
                task_id: id,
                task: content,
                container: "removed",
              },
            ]);
          }}
        >
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
