import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ModelTypeDataProps } from '../models/ModelTypeData';
import Button from '@mui/material/Button';



export default function ModelTypeTable({modelTypeData}:ModelTypeDataProps){
    function handlerUpdateModelType(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, arg1: string): void {
       alert("I am clicked"+arg1);
    }
    function handlerDeleteModelType(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, arg1: string): void {
        alert("I am clicked"+arg1);
    }

  return (
    <Paper elevation={10}>
    <TableContainer component={Paper}  sx={{width: 400}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell> */}
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {modelTypeData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">
                    {row.calories}
                    <Button variant="contained" size="small"   onClick={(e)=>handlerUpdateModelType(e,"UpdateButton")} > Update </Button>
                    <Button variant="contained" size="small"   onClick={(e)=>handlerDeleteModelType(e,"DeleteButton")} > Delete </Button>
                </TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
}
