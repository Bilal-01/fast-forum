import React, { useState } from 'react';
import {
    OutlinedInput,
    InputLabel,
    MenuItem,
    FormControl,
    ListItemText,
    Select,
    Checkbox,
    Button,
} from '@mui/material';
import axios from 'axios';
import TimetableContext from '../TimetableContext';
import { useContext } from 'react';
import { useEffect } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};


export default function TimetableFormSelectCourses(props) {
  const [personName, setPersonName] = useState([]);
  const [finalValue, setFinalValue] = useState([]);
  const timetable = useContext(TimetableContext);
  const [names, setNames] = useState([]);
  useEffect(() => {
    timetable.setIsRefreshed(true);
    axios.get('http://localhost/forum/php/api/timetable.php').then(function(res){
      // console.log(res.data.results);
      let results = res.data.results;
      setNames([...results]);
      // setNames([...res.data.results]);
    })
  }, [])


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
    setFinalValue([...value]);
  };

  const handleSubmit = () => {
    axios.post('http://localhost/forum/php/api/timetable.php', finalValue).then(function(res){
      // console.log([...res.data.results]);
      timetable.setTimetable([...res.data.results]);
    })
    props.handleBtn();
  }

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
            <MenuItem key={name} value={name.tcode}>
              <Checkbox checked={personName.indexOf(name.tcode) > -1} />
              <ListItemText primary={name.tcode} />
            </MenuItem>
          ))}
        </Select>

        <Button 
          sx={{marginTop: '50px'}}
          fullWidth
          type='submit'
          variant='contained'
          color='primary'
          onClick={handleSubmit}
        >
          Submit
        </Button>

      </FormControl>
    </div>
  );
}