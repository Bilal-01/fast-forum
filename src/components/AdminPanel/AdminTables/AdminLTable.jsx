import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import axios from "axios";
import UserContext from "../../UserContext";
import { useContext } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#bedff2",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function AdminLTable() {
  const auth = useContext(UserContext);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    console.log("Admin library");
    refreshLibrary();
  }, []);

  function deleteEntry(Sid) {
    let id = Sid;
    console.log(id);
    axios
      .delete("http://localhost/forum/php/api/library.php", { data: id })
      .then(function (response) {
        console.log(response.data);
        refreshLibrary();
      });
  }
  const refreshLibrary = async () => {
    const response = await axios.get(
      "http://localhost/forum/php/api/library.php"
    );
    if (response.data.results) {
      setRows([...response.data.results]);
    }
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ width: "95%", margin: "10px auto", maxHeight: "70vh" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">SNo</StyledTableCell>
            <StyledTableCell align="center">ISBN</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Author</StyledTableCell>
            <StyledTableCell align="center">Course Name</StyledTableCell>
            <StyledTableCell align="center">Pages</StyledTableCell>
            <StyledTableCell align="center">Available</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow
              key={row.book_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell align="center">{i + 1}</StyledTableCell>
              <StyledTableCell align="center">{row.isbn}</StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.author}</StyledTableCell>
              <StyledTableCell align="center">
                {row.course_name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.pages}</StyledTableCell>
              <StyledTableCell align="center">{row.available}</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  onClick={(event) => deleteEntry(row.book_id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default AdminLTable;
