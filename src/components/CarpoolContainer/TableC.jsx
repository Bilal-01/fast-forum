import React, { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import UserContext from '../UserContext';
import { useContext } from 'react';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e25a44',
    color: theme.palette.common.white,


  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,

  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





function TableC() {
  const auth=useContext(UserContext);
	var stud=''
    {auth.user? stud=auth.user.id:stud=''}
  const [rows, setRows] = useState([])
  useEffect(() => {
     refreshCarpool();
  }, [])
  function deleteEntry(Rid){
    let id= Rid
    console.log(id)
    axios.delete('http://localhost/forum/php/api/carpool.php', {data: id}).then(function(response){
        console.log(response.data)
        refreshCarpool();
    })
}
  function refreshCarpool() {
    axios.get("http://localhost/forum/php/api/carpool.php").then(function (response) {
      console.log(response.data.results);
      setRows([...response.data.results])
      rows.map((row, i) => {
        console.log(row.pick_up +
          row.drop_off +
          row.route +
          row.captain_id +
          row.phoneNo +
          row.time +
          row.Day);
      })
    })
  }
  // console.log(rows[0].Days);
  return (
    <TableContainer component={Paper} sx={{ width: '95%', margin: '10px auto',minHeight: '50vh' }}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">SNO</StyledTableCell>
            <StyledTableCell align="center">Pick_Up</StyledTableCell>
            <StyledTableCell align="center">Drop_Off</StyledTableCell>
            <StyledTableCell align="center">Route</StyledTableCell>
            <StyledTableCell align="center">CaptainID</StyledTableCell>
            <StyledTableCell align="center">PhoneNo</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Day</StyledTableCell>
            <StyledTableCell align="center">Manage</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow
              key={row.carpool_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" >{i}</StyledTableCell>
              <StyledTableCell align="center">{row.pick_up}</StyledTableCell>
              <StyledTableCell align="center">{row.drop_off}</StyledTableCell>
              <StyledTableCell align="center">{row.route}</StyledTableCell>
              <StyledTableCell align="center">{row.captain_id}</StyledTableCell>
              <StyledTableCell align="center">{row.phoneNo}</StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center">{row.day}</StyledTableCell>
              <StyledTableCell align="center">{stud === row.captain_id?<Button sx={{background:'#e25a44'}}variant="contained" onClick={(event)=>deleteEntry(row.carpool_id)}>Delete</Button>:''}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableC;