import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, name, destination, price) {
  return { id, name, destination, price };
}

export default function () {
  const classes = useStyles();

  const [rows, setRows] = useState([
    createData("111111", "Katty Ajkhfs", "Canada", 1000.0),
    createData("111111", "Katty Ajkhfs", "Canada", 1000.0),
    createData("111111", "Katty Ajkhfs", "Canada", 1000.0),
    createData("111111", "Katty Ajkhfs", "Canada", 1000.0),
    createData("111111", "Katty Ajkhfs", "Canada", 1000.0),
  ]);
  const fetchData = () => {
    axios.get("/api/quotes").then((response) => {
      setRows([...rows, response.data]);
    });
  };

  console.log("rows1", rows);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID #</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">DESTINATION</TableCell>
              <TableCell align="right">PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.destination}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button onClick={fetchData}>click me</button>
    </>
  );
}
