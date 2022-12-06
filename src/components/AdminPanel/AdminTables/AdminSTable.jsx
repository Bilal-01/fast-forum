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
import UserContext from '../../UserContext';
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

function AdminSTable() {
	const auth=useContext(UserContext);
	const [rows, setRows] = useState([])
	useEffect(() => {
	  	refreshSocieties();
	}, [])
	function deleteEntry(Sid){
        let id= Sid
        console.log(id)
        axios.delete('http://localhost/forum/php/api/society.php', {data: id}).then(function(response){
            console.log(response.data)
            refreshSocieties();
        })
    }
	function refreshSocieties() {
	  	axios.get("http://localhost/forum/php/api/society.php").then(function (response) {
			console.log(response.data.results);
			setRows([...response.data.results])
	  	})
	}
	return (
		<TableContainer component={Paper} sx={{width: '95%', margin: '10px auto', maxHeight: '70vh'}}>
			<Table sx={{ minWidth: 650 }} aria-label="customized table">
			<TableHead>
				<TableRow>
				<StyledTableCell align="left">SID</StyledTableCell>
				<StyledTableCell align="center">SName</StyledTableCell>
				<StyledTableCell align="center">SDescription</StyledTableCell>
				<StyledTableCell align="center">Head_id</StyledTableCell>
				<StyledTableCell align="center">President_id</StyledTableCell>
                <StyledTableCell align="center">scoialMedia_Link</StyledTableCell>
                <StyledTableCell align="center">Manage</StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map((row,i) => (
				<StyledTableRow
					key={row.society_id}
					sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
				<StyledTableCell align="center">{row.society_id}</StyledTableCell>
				<StyledTableCell align="center">{row.sname}</StyledTableCell>
                <StyledTableCell align="center">{row.sdescription}</StyledTableCell>
                <StyledTableCell align="center">{row.head_id}</StyledTableCell>
				<StyledTableCell align="center"><Link href={'/profile/'+ row.president_id}>{row.president_id}</Link></StyledTableCell>
                <StyledTableCell align="center"><Link href={row.socialMedia_link}>{row.socialMedia_link}</Link></StyledTableCell>
                <StyledTableCell align="center"><Button variant="contained" onClick={(event)=>deleteEntry(row.society_id)}>Delete</Button></StyledTableCell>
				</StyledTableRow>
				))}
			</TableBody>
			</Table>
		</TableContainer>
	);
}
export default AdminSTable;