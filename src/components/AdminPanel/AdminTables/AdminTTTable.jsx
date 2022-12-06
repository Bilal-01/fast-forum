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

function AdminTTTable() {
	const auth=useContext(UserContext);
	const [rows, setRows] = useState([])
	useEffect(() => {
	  	refreshTimeTable();
	}, [])
	function deleteEntry(Tid){
        let id= Tid
        console.log(id)
        axios.delete('http://localhost/forum/php/api/timetable.php', {data: id}).then(function(response){
            console.log(response.data)
            refreshTimeTable();
        })
    }
	function refreshTimeTable() {
	  	axios.get("http://localhost/forum/php/api/admin.php").then(function (response) {
			console.log(response.data.results);
			setRows([...response.data.results])
	  	})
	}
	return (
		<TableContainer component={Paper} sx={{width: '95%', margin: '10px auto'}}>
			<Table sx={{ minWidth: 650 }} aria-label="customized table">
			<TableHead>
				<TableRow>
				<StyledTableCell align="left">TID</StyledTableCell>
				<StyledTableCell align="center">Day</StyledTableCell>
				<StyledTableCell align="center">Code</StyledTableCell>
				<StyledTableCell align="center">Room</StyledTableCell>
				<StyledTableCell align="center">TimeSlot</StyledTableCell>
				<StyledTableCell align="center">Manage</StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map((row,i) => (
				<StyledTableRow
					key={row.tt_id}
					sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
					<StyledTableCell component="th" scope="row">
					{i+1}
					</StyledTableCell>
				<StyledTableCell align="center">{row.ttday}</StyledTableCell>
                <StyledTableCell align="center">{row.tcode}</StyledTableCell>
                <StyledTableCell align="center">{row.croom}</StyledTableCell>
				<StyledTableCell align="center">{row.timeslot}</StyledTableCell>
                <StyledTableCell align="center"><Button variant="contained" onClick={(event)=>deleteEntry(row.tt_id)}>Delete</Button></StyledTableCell>
				</StyledTableRow>
				))}
			</TableBody>
			</Table>
		</TableContainer>
	);
}
export default AdminTTTable;