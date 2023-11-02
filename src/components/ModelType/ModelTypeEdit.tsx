import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import React from 'react'

import { PostToApi } from '../../pages/fetchRemoteData'
import { ModelTypeEditDataProps } from '../../models/DocumentVersionProps'
import { ModelTypeResponseDTO } from '../../models/DocumentVersionDTOs'

function ModelTypeEditInput({modelTypeData,index,modelTypeDataListandSetStateFunction}: ModelTypeEditDataProps) {
  
    const [modelTypeName, setmodelTypeName] = React.useState(modelTypeData.modelTypesName);
    function handlerUpdateModelType(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, arg1: string): void {
       
        
        const list =modelTypeDataListandSetStateFunction[0]
        const newlist=list.map((item) => (item.modelTypesId === modelTypeData.modelTypesId ? { ...item, name: modelTypeName} : item))  

        modelTypeDataListandSetStateFunction[1](newlist);
        const newValue:ModelTypeResponseDTO = {modelTypesId:modelTypeData.modelTypesId, modelTypesName:modelTypeName};
        PostToApi(newValue);
    }



    
    function handleTextChange(event: React.ChangeEvent<HTMLInputElement >): void {
        const name = event.target.name;
        const value = event.target.value
        setmodelTypeName(value);
  
    }

  return (
   

    <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }  ,width: 400}}
            >
                <TableCell component="th" scope="row">
                
                <TextField id="standard-basic"
                            label="Model Type Name" 
                            variant="standard"  
                            value={modelTypeName}
                            onChange={handleTextChange}  
                           // required
                           // error={isError} // Set this based on your validation logic
                          //  helperText={isError ? 'Model Type Name is required' : ''}
                           // inputRef ={nameRef}
                         />
                </TableCell>
                <TableCell align="right">
                   
                    {/* <Button variant="contained" size="small"   > Update </Button> */}
                    <Button variant="contained" size="small"  onClick={(e)=>handlerUpdateModelType(e,"UpdateButton")} > Update </Button> 
                </TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
           

    
  )
}

export default ModelTypeEditInput