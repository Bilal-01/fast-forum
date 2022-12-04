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

function AdminTableB() {
	const [rows, setRows] = useState([])
	useEffect(() => {
	  	refreshBlog();
	}, [])
	function deleteEntry(Bid){
        let id= Bid
        console.log(id)
        axios.delete('http://localhost/forum/php/api/blog.php', {data: id}).then(function(response){
            console.log(response.data)
            refreshBlog();
        })
    }
	function refreshBlog() {
	  	axios.get("http://localhost/forum/php/api/blog.php").then(function (response) {
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
				<StyledTableCell align="center">Heading</StyledTableCell>
				<StyledTableCell align="center">PostBy</StyledTableCell>
				<StyledTableCell align="center">DateOfPost</StyledTableCell>
				<StyledTableCell align="center">Description</StyledTableCell>
				<StyledTableCell align="center"> </StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map((row,i) => (
				<StyledTableRow
					key={row.Bid}
					sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
				>
					<StyledTableCell component="th" scope="row">
					{i+1}
					</StyledTableCell>
				<StyledTableCell align="center">{row.Heading}</StyledTableCell>
				<StyledTableCell align="center"><Link href={'/profile/'+ row.post_by}>{row.post_by}</Link></StyledTableCell>
				<StyledTableCell align="center">{row.date_of_post}</StyledTableCell>
				<StyledTableCell align="center">{row.description}</StyledTableCell>
				<StyledTableCell align="center"><Button variant="contained" onClick={(event)=>deleteEntry(row.Bid)}>Delete</Button></StyledTableCell>
				</StyledTableRow>
				))}
			</TableBody>
			</Table>
		</TableContainer>
	);
}
export default AdminTableB;