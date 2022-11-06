import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function CarpoolData(SNO,Pick_Up,Drop_off,Route,CaptainID,PhoneNo,Time,Day) {
  return {SNO,Pick_Up,Drop_off,Route,CaptainID,PhoneNo,Time,Day};
}

const rows = [
  CarpoolData(1,"XYZ","FAST","X-Y-Z-FAST","K201234",123456087,"8:00-9:00","Monday"),
  CarpoolData(1,"XYZ","FAST","X-Y-Z-FAST","K201234",123456087,"8:00-9:00","Monday"),
];

function TableC() {
  return (
    <TableContainer component={Paper} sx={{width: '95%', margin: '10px auto'}}>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.SNO}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <StyledTableCell component="th" scope="row">
                {row.SNO}
                </StyledTableCell>
            <StyledTableCell align="center">{row.Pick_Up}</StyledTableCell>
            <StyledTableCell align="center">{row.Drop_off}</StyledTableCell>
            <StyledTableCell align="center">{row.Route}</StyledTableCell>
            <StyledTableCell align="center">{row.CaptainID}</StyledTableCell>
            <StyledTableCell align="center">{row.PhoneNo}</StyledTableCell>
            <StyledTableCell align="center">{row.Time}</StyledTableCell>
            <StyledTableCell align="center">{row.Day}</StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableC;