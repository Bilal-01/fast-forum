import React, { useState } from 'react';
import {
    OutlinedInput,
    InputLabel,
    MenuItem,
    FormControl,
    ListItemText,
    Select,
    Checkbox,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = [
  'Algo BSCS-5D',
  'DB BSCS-5D',
  'GT BSCS-5D',
  'PDC BSCS-5D',
  'SDA BSCS-5D',
  'Algo BSCS-5A',
  'DB BSCS-5A',
  'GT BSCS-5A',
  'PDC BSCS-5A',
  'SDA BSCS-5A',
  'Algo BSCS-5B',
  'DB BSCS-5B',
  'GT BSCS-5B',
  'PDC BSCS-5B',
  'SDA BSCS-5B',
];

export default function TimetableFormSelectCourses() {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{  margin: '20px 0', width: 300 }}>
        <InputLabel id="tt-form-select-courses">Select Courses</InputLabel>
        <Select
          fullWidth
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Select Courses" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}