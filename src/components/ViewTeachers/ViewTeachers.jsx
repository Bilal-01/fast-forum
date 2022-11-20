import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProfileIcon from '../../assets/user-profile-icon.png';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

function createData(id, url, name, email, courses, location) {
    return { id, url, name, email, courses, location };
}

const rows = [
    createData(
        1, 
        ProfileIcon, 
        'Bilal Aziz', 
        'bilal.aziz@nu.edu.pk', 
        ['Database Systems', 'Design and Analysis of Algorithms'],
        'EE Building, 1st Floor Faculty Offices'
    ),
    createData(
        2, 
        ProfileIcon, 
        'Sabah Mawani', 
        'sabah.mawani@nu.edu.pk', 
        ['Parallel and Distributed Computing', 'Software Design and Analysis'], 
        'CS Building, Basement Faculty Offices'
    ),
    createData(
        3, 
        ProfileIcon, 
        'Maryam Siddiqui', 
        'maryam.siddiqui@nu.edu.pk', 
        ['Database Systems', 'Graph Theory'], 
        'EE Building, Ground Floor Faculty Offices'
    ),
];

export default function ViewTeachers() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '1200px', margin: '30px auto', }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{width: '240px'}}>Profile</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Courses&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Location&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row" sx={{height: '240px'}}>
                <img src={row.url} alt="profile" height='200px' width='200px' />
                
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.courses.map((value) => {
                return <p id={value}>{value}</p>
              })}</StyledTableCell>
              <StyledTableCell align="left">{row.location}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}