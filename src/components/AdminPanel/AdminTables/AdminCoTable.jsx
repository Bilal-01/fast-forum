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
import { useContext } from 'react';
import UserContext from '../../UserContext';

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

function AdminCoTable() {
	const auth=useContext(UserContext);
	const [rows, setRows] = useState([])
	useEffect(() => {
	  	refreshCourse();
	}, [])
	function deleteEntry(Cid){
        let id= Cid
        console.log(id)
        axios.delete('http://localhost/forum/php/api/courses.php', {data: id}).then(function(response){
            console.log(response.data)
            refreshCourse();
        })
    }
	function refreshCourse() {
	  	axios.get("http://localhost/forum/php/api/courses.php").then(function (response) {
			console.log(response.data.results);
			setRows([...response.data.results])
	  	})
	}
	return (
		<TableContainer component={Paper} sx={{width: '95%', margin: '10px auto'}}>
			<Table sx={{ minWidth: 650 }} aria-label="customized table">
			<TableHead>
				<TableRow>
				<StyledTableCell align="left">SNO</StyledTableCell>
				<StyledTableCell align="left">CID</StyledTableCell>
				<StyledTableCell align="center">CourseName</StyledTableCell>
				<StyledTableCell align="center">CoordinatorID</StyledTableCell>
				<StyledTableCell align="center">Manage</StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map((row,i) => (
				<StyledTableRow
					key={row.cid}
					sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
					<StyledTableCell component="th" scope="row">
					{i+1}
					</StyledTableCell>
				<StyledTableCell align="center">{row.cid}</StyledTableCell>
                <StyledTableCell align="center">{row.cname}</StyledTableCell>
                <StyledTableCell align="center">{row.coordinator}</StyledTableCell>
                <StyledTableCell align="center"><Button variant="contained" onClick={(event)=>deleteEntry(row.cid)}>Delete</Button></StyledTableCell>
				</StyledTableRow>
				))}
			</TableBody>
			</Table>
		</TableContainer>
	);
}
export default AdminCoTable;