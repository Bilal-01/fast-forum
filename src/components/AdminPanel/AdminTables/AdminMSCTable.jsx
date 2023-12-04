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

function AdminMSCTable() {
	const auth=useContext(UserContext);
	const [rows, setRows] = useState([])
	useEffect(() => {
	  	refreshMenu();
	}, [])
	function deleteEntry(Mid){
        let id= Mid
        console.log(id)
        axios.delete('http://localhost/forum/php/api/menu.php', {data: id}).then(function(response){
            console.log(response.data)
            refreshMenu();
        })
    }
	function refreshMenu() {
	  	axios.get("http://localhost/forum/php/api/menu.php?canteenName=shawarma-corner").then(function (response) {
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
				<StyledTableCell align="left">Name</StyledTableCell>
				<StyledTableCell align="center">Description</StyledTableCell>
				<StyledTableCell align="center">Price</StyledTableCell>
				<StyledTableCell align="center">Image_path</StyledTableCell>
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
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.description}</StyledTableCell>
				<StyledTableCell align="center">{row.price}</StyledTableCell>
				<StyledTableCell align="center">{row.image_path}</StyledTableCell>
				<StyledTableCell align="center"><Button variant="contained" onClick={(event)=>deleteEntry(row.id)}>Delete</Button></StyledTableCell>
				</StyledTableRow>
				))}
			</TableBody>
			</Table>
		</TableContainer>
	);
}
export default AdminMSCTable;