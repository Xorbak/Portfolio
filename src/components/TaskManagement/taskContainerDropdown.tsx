import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { IconButton } from "@mui/material";
import { TaskContainers, Tasks } from "../../Screens/TaskManagement";

interface Props {
  taskContainers: TaskContainers[];
  discription: string;
  parentContainer: string;
  moveTask: (taskId: string, moveTo: string) => void;
  taskId: string;
  content: string;
  setTask: React.Dispatch<React.SetStateAction<Tasks[]>>;
  task: Tasks[];
  due: string;
  createdOn: string;
}
export const TaskContainerDropdown = ({
  taskContainers,
  discription,
  due,
  createdOn,
  moveTask,
  taskId,
  parentContainer,
  content,
  task,
  setTask,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //removes it from its current container and moves to another one in the front end
  const changeTaskState = (
    taskId: string,
    taskContent: string,
    moveToContainer: string
  ) => {
    setTask(task.filter((currentItem) => currentItem.task_id !== taskId));
    setTask((currentItem) => [
      ...currentItem,
      {
        task_id: taskId,
        task: taskContent,
        container: moveToContainer,
        due: due,
        created: createdOn,
        discription: discription,
      },
    ]);
  };

  return (
    <React.Fragment>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TrendingFlatIcon fontSize="small" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {taskContainers.map((i) => {
          return parentContainer !== i.container ? (
            <MenuItem
              onClick={() => {
                handleClose();
                moveTask(taskId, i.container);
                changeTaskState(taskId, content, i.container);
              }}
            >
              {i.container}
            </MenuItem>
          ) : null;
        })}
      </Menu>
    </React.Fragment>
  );
};
