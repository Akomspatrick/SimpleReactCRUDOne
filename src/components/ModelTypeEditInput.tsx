import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import React, { FormEvent } from 'react'
import { ModelTypeData, ModelTypeDataNew, ModelTypeEditDataProps } from '../models/ModelTypeData'

function ModelTypeEditInput({modelTypeData,index,modelTypeDataListandSetStateFunction}: ModelTypeEditDataProps) {
  
    const [modelTypeName, setmodelTypeName] = React.useState(modelTypeData.name);
    function handlerUpdateModelType(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, arg1: string): void {
       
        
        const list =modelTypeDataListandSetStateFunction[0]
        const newlist=list.map((item) => (item.name === modelTypeData.name ? { ...item, name: modelTypeName } : item))  

        modelTypeDataListandSetStateFunction[1](newlist);
        const newValue:ModelTypeDataNew = {modelTypeId:modelTypeData.name, modelTypeName:modelTypeName};
        PostToApi(newValue);
    }


//     PUT {{baseUrl}}/ModelType
// Content-Type: application/json

// {
//   "modeltypeId": "THIRDMODELTYPEID",
//   "modeltypeName": "MODIFIED ML2"
// }
    const PostToApi=( newValue:ModelTypeDataNew )=>{
        const baseUrl= "http://localhost:5007/api/ModelType";
        fetch(baseUrl, {
            method: 'PUT',
            headers: {
             'Content-Type': 'application/json'
             },
            body: JSON.stringify(newValue)   })
            .then(response => {
                response.json()
                
            })
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }
    
    function handleTextChange(event: React.ChangeEvent<HTMLInputElement >): void {
        const name = event.target.name;
        const value = event.target.value
        setmodelTypeName(value);
        // const list =modelTypeDataListandSetStateFunction[0]
        // const newlist=list.map((item) => (item.name === modelTypeData.name ? { ...item, name: value } : item))  
        // modelTypeDataListandSetStateFunction[1](newlist);
    }

    // function submitHandler(event: FormEvent<HTMLFormElement>): void {
    //      event.preventDefault();
    //     // const value = event.target.elements.name.value
    //      const list =modelTypeDataListandSetStateFunction[0]
    //      const newlist=list.map((item) => (item.name === modelTypeData.name ? { ...item, name: value } : item))  
    //      modelTypeDataListandSetStateFunction[1](newlist);
    // }

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
                    {modelTypeData.calories}
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