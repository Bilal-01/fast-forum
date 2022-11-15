import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#bedff2',
    color: theme.palette.common.black,
    
  
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

function ProjectData(SNO,CourseID,StudentID,DateOfPost,GithubLink) {
  return {SNO,CourseID,StudentID,DateOfPost,GithubLink};
}

const rows = [
  ProjectData(1,"CS3001","K201234","1/10/2022","github.com/xyz"),
  ProjectData(1,"CS3001","K201234","1/10/2022","github.com/xyz"),
];

function TableP() {
  return (
    <TableContainer component={Paper} sx={{width: '95%', margin: '10px auto'}}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="left">SNO</StyledTableCell>
            <StyledTableCell align="center">CourseID</StyledTableCell>
            <StyledTableCell align="center">StudentID</StyledTableCell>
            <StyledTableCell align="center">DateOfPost</StyledTableCell>
            <StyledTableCell align="center">GithubLink</StyledTableCell>
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
            <StyledTableCell align="center">{row.CourseID}</StyledTableCell>
            <StyledTableCell align="center">{row.StudentID}</StyledTableCell>
            <StyledTableCell align="center">{row.DateOfPost}</StyledTableCell>
            <StyledTableCell align="center"><Link href={row.GithubLink}>{row.GithubLink}</Link></StyledTableCell>
          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableP;