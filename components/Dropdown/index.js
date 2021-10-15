import React, { useState } from "react";
import { Box } from "@mui/system";
import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";

const Dropdown = () => {
  // const [menu, setMenu] = useState()

  // const handleChange = (event) => {
  //   setMenu(event.target.value)
  // }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
