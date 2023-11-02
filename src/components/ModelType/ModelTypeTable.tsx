import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ModelTypeEditInput from './ModelTypeEdit';
import { DeleteFromApi, fetchRemoteData } from '../../pages/fetchRemoteData';
import { ModelTypeTableProps } from '../../models/DocumentVersionProps';
import { ModelTypeResponseDTO,ModelTypeDeleteDTO } from '../../models/DocumentVersionDTOs';
import ModelTypeDelete from './ModelTypeDelete';


export default function ModelTypeTable({modelTypeData,setModelTypeDataListVr, setUpdateState,setListChanged}:ModelTypeTableProps){
    function handlerUpdateModelType(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, arg1: string, arg2:ModelTypeResponseDTO): void {
       setUpdateState[1](arg2.modelTypesName!);
    }
    function handlerDeleteModelType(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, row:ModelTypeResponseDTO): void {
          

    // const modelTypeDeleteDTO :ModelTypeDeleteDTO = {modelTypesId:row.modelTypesId};
      ModelTypeDelete ({setListChanged ,modelTypeDeleteDTO :{modelTypesId:row.modelTypesId}})
    }

  return (
    <Paper elevation={10}>
    <TableContainer component={Paper}  sx={{width: 400, maxHeight: 500}}>
      <Table  stickyHeader aria-label="sticky table" >
        <TableHead>
          <TableRow>

          </TableRow>
        </TableHead>
        <TableBody>
          {
          modelTypeData.map((row,index) => (
           setUpdateState[0]===row.modelTypesName ? <ModelTypeEditInput  modelTypeData={row} index={index} modelTypeDataListandSetStateFunction ={[modelTypeData,setModelTypeDataListVr] } /> :
           
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 },marginBottom:0 ,p:0}}   key={row.modelTypesId}>
                <TableCell component="th" scope="row"> {row.modelTypesName} 
                </TableCell>
                <TableCell component="th" scope="row">
                    <Button variant="contained" size="small"   onClick={(e)=>handlerUpdateModelType(e,"UpdateButton",row)} > Edit </Button>
                    <Button variant="contained" size="small"   onClick={(e)=>handlerDeleteModelType(e,row)} > Delete </Button>
                </TableCell>
              </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
}
