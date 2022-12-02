import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProfileIcon from '../../assets/user-profile-icon.png';
import axios from 'axios';  
import './teachers.css';

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

export default function ViewTeachers() {
  const [teachers, setTeachers] = useState([]);
  useEffect(()=>{
    getTeacherDetails();
  }, []);


  function getTeacherDetails(){
    axios.get('http://localhost/forum/php/api/teacher.php').then(function(res){
      setTeachers([...res.data.results])
    })
  }

  return (
    <div className='teachers-container'>
      <TableContainer component={Paper} sx={{width: '90vw', margin: '0 auto'}}>
        <Table sx={{ width: '1200px', margin: '30px auto', }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='left'>SNO</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Email&nbsp;</StyledTableCell>
              {/* <StyledTableCell align="left">Courses&nbsp;</StyledTableCell> */}
              <StyledTableCell align="left">Location&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { teachers.map((row, i) => {
              return(
                  <StyledTableRow key={row.id}>
                    <StyledTableCell align="left">{i+1}</StyledTableCell>
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="left">{row.email}</StyledTableCell>
                    {/* <StyledTableCell align="left">{row.courses.map((value) => {
                      return <p id={value}>{value}</p>
                    })}</StyledTableCell> */}
                    <StyledTableCell align="left">{row.location}</StyledTableCell>
                  </StyledTableRow>
              )
            }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}