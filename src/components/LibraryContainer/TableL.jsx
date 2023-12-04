// import React, { useState,useEffect } from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';
// import UserContext from '../UserContext';
// import { useContext } from 'react';
// import Button from '@mui/material/Button';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({

//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: 'brown',
//     color: theme.palette.common.white,

//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,

//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function TableL() {
//   const auth=useContext(UserContext);
// 	var stud=''
//     {auth.user? stud=auth.user.id:stud=''}
//   const [rows, setRows] = useState([])
//   useEffect(() => {
//      refreshCarpool();
//   }, [])
//   function deleteEntry(Rid){
//     let id= Rid
//     console.log(id)
//     axios.delete('http://localhost/forum/php/api/carpool.php', {data: id}).then(function(response){
//         console.log(response.data)
//         refreshCarpool();
//     })
// }
//   function refreshCarpool() {
//     axios.get("http://localhost/forum/php/api/carpool.php").then(function (response) {
//       console.log(response.data.results);
//       setRows([...response.data.results])
//       rows.map((row, i) => {
//         console.log(row.pick_up +
//           row.drop_off +
//           row.route +
//           row.captain_id +
//           row.phoneNo +
//           row.time +
//           row.Day);
//       })
//     })
//   }
//   // console.log(rows[0].Days);
//   return (
//     <TableContainer component={Paper} sx={{ width: '95%', margin: '10px auto' }}>
//       <Table sx={{ minWidth: 650 }} aria-label="customized table">
//       <TableHead>
//           <TableRow>
//             <StyledTableCell align="left">ISBN</StyledTableCell>
//             <StyledTableCell align="center">Book Name</StyledTableCell>
//             <StyledTableCell align="center">Author</StyledTableCell>
//             <StyledTableCell align="center">Description</StyledTableCell>
//             <StyledTableCell align="center">Pages</StyledTableCell>
//             <StyledTableCell align="center">Add</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, i) => (
//             <StyledTableRow
//               key={row.library_id}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <StyledTableCell component="th" >{i}</StyledTableCell>
//               <StyledTableCell align="center">{row.ISBN}</StyledTableCell>
//               <StyledTableCell align="center">{row.Book_name}</StyledTableCell>
//               <StyledTableCell align="center">{row.Author}</StyledTableCell>
//               <StyledTableCell align="center">{row.Description}</StyledTableCell>
//               <StyledTableCell align="center">{row.pages}</StyledTableCell>
//               <StyledTableCell align="center">{row.Add}</StyledTableCell>
//               <StyledTableCell align="center">{stud === row.captain_id?<Button sx={{background:'#e25a44'}}variant="contained" onClick={(event)=>deleteEntry(row.carpool_id)}>Delete</Button>:''}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// export default TableL;

import { DataGrid, GridToolbar } from '@mui/x-data-grid';

// Assuming your book dataset is stored in the 'books' variable
const books = [
  {
    "ISBN": "978-0-306-40615-7",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A classic novel depicting the roaring twenties and the American Dream.",
    "pages": 180,
    "rating": 4.5,
    "available": true,
  },
  {
    "ISBN": "978-0-7475-3269-6",
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J.K. Rowling",
    "description": "The first book in the Harry Potter series, introducing the magical world of Hogwarts.",
    "pages": 320,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-0-399-14861-0",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "description": "A novel exploring racial injustice and moral growth in the American South.",
    "pages": 281,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-0-618-06848-0",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "description": "A coming-of-age novel narrated by a teenager named Holden Caulfield.",
    "pages": 224,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-1-4165-8638-6",
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "description": "A thriller novel involving a conspiracy related to the works of Leonardo da Vinci.",
    "pages": 689,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-0-399-14861-0",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "description": "A novel exploring racial injustice and moral growth in the American South.",
    "pages": 281,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-0-618-06848-0",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "description": "A coming-of-age novel narrated by a teenager named Holden Caulfield.",
    "pages": 224,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-1-4165-8638-6",
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "description": "A thriller novel involving a conspiracy related to the works of Leonardo da Vinci.",
    "pages": 689,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-1-4165-8638-6",
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "description": "A thriller novel involving a conspiracy related to the works of Leonardo da Vinci.",
    "pages": 689,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-0-399-14861-0",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "description": "A novel exploring racial injustice and moral growth in the American South.",
    "pages": 281,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-0-618-06848-0",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "description": "A coming-of-age novel narrated by a teenager named Holden Caulfield.",
    "pages": 224,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-1-4165-8638-6",
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "description": "A thriller novel involving a conspiracy related to the works of Leonardo da Vinci.",
    "pages": 689,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-1-4165-8638-6",
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "description": "A thriller novel involving a conspiracy related to the works of Leonardo da Vinci.",
    "pages": 689,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-0-399-14861-0",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "description": "A novel exploring racial injustice and moral growth in the American South.",
    "pages": 281,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-0-618-06848-0",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "description": "A coming-of-age novel narrated by a teenager named Holden Caulfield.",
    "pages": 224,
    "rating": 4.5,
    "available": true
  },
  {
    "ISBN": "978-1-4165-8638-6",
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "description": "A thriller novel involving a conspiracy related to the works of Leonardo da Vinci.",
    "pages": 689,
    "rating": 4.5,
    "available": true
  }
]


const TableL = () => {
  const data = {
    columns: [
      { field: 'ISBN', headerName: 'ISBN', flex: 1 },
      { field: 'title', headerName: 'Title', flex: 1 },
      { field: 'author', headerName: 'Author', flex: 1 },
      { field: 'description', headerName: 'Description', flex: 1 },
      { field: 'pages', headerName: 'Pages', flex: 1 },
      { field: 'available', headerName: 'Available', flex: 1}
    ],
    rows: books.map((book, index) => ({ id: index, ...book}))
  };

  return (
    <div className='lib-table' style={{ height: 600, width: '100%' }}>
      <DataGrid
        {...data}
        slots={{
          toolbar: GridToolbar,
        }}
        initialState={data.initialState}
      />
    </div>
  );
};

export default TableL;

