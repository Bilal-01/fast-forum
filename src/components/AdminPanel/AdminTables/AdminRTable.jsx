import React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import axios from 'axios';
import UserContext from '../UserContext';
import { useContext } from 'react';

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
	'&:last-child td, &:last-child th': {
	  border: 0,
	},
  }));

function AdminTableR() {
	
	const [rows, setRows] = useState([])
	useEffect(() => {
	  	refreshResource();
	}, [])
	function deleteEntry(Rid){
        let id= Rid
        console.log(id)
        axios.delete('http://localhost/forum/php/api/resource.php', {data: id}).then(function(response){
            console.log(response.data)
            refreshResource();
        })
    }
	function refreshResource() {
	  	axios.get("http://localhost/forum/php/api/resource.php").then(function (response) {
			console.log(response.data.results);
			setRows([...response.data.results])
			rows.map((row, i) => {
				console.log(row.ID 
					+ row.course_id
					+ row.student_id
					+ row.Drive_Link
					+ row.date_of_publish
				);
			})
	  	})
	}
	return (
		<TableContainer component={Paper} sx={{width: '95%', margin: '10px auto'}}>
			<Table sx={{ minWidth: 650 }} aria-label="customized table">
			<TableHead>
				<TableRow>
				<StyledTableCell align="left">SNO</StyledTableCell>
				<StyledTableCell align="center">CourseID</StyledTableCell>
				<StyledTableCell align="center">StudentID</StyledTableCell>
				<StyledTableCell align="center">DateOfPublish</StyledTableCell>
				<StyledTableCell align="center">DriveLink</StyledTableCell>
				<StyledTableCell align="center"> </StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map((row,i) => (
				<StyledTableRow
					key={row.ID}
					sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
					<StyledTableCell component="th" scope="row">
					{i+1}
					</StyledTableCell>
				<StyledTableCell align="center">{row.course_id}</StyledTableCell>
				<StyledTableCell align="center"><Link href={'/profile/'+ row.student_id}>{row.student_id}</Link></StyledTableCell>
				<StyledTableCell align="center">{row.date_of_publish}</StyledTableCell>
				<StyledTableCell align="center"><Link href={row.Drive_Link}>{row.Drive_Link}</Link></StyledTableCell>
				<StyledTableCell align="center"><Button variant="contained" onClick={(event)=>deleteEntry(row.ID)}>Delete</Button></StyledTableCell>
				</StyledTableRow>
				))}
			</TableBody>
			</Table>
		</TableContainer>
	);
}
export default AdminTableR;