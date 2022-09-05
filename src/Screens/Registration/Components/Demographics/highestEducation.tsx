import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";

//@ts-ignore
export const highestEducation = ({ field, form, ...props }) => {
  const [education, setEducation] = React.useState("Highest Education");
  //save the option you choose as the value
  const handleChange = (event: any) => {
    setEducation(event.target.value as string);
  };
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Highest Education</InputLabel>
        <Select
          value={education}
          onChange={handleChange}
          label="HighestEducation"
          {...field}
          {...props}
        >
          <MenuItem value={"none"}>None</MenuItem>
          <MenuItem value={"Highschool Diploma"}>Highschool Diploma</MenuItem>
          <MenuItem value={"Bachelor's Degree"}>Batcholers Degree</MenuItem>
          <MenuItem value={"Master's Degree"}>Master's Degree</MenuItem>
          <MenuItem value={"Doctoral "}>Doctoral </MenuItem>
          <MenuItem value={"PHD"}>PHD </MenuItem>
          <MenuItem value={"Diploma "}>Diploma </MenuItem>{" "}
          <MenuItem value={"Dumb AF"}>My mom says I'm smart </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
