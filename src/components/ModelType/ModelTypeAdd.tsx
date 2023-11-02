import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import React from 'react'
import { ModelTypeAddProps } from '../../models/DocumentVersionProps'
import { PostToApi } from '../../pages/fetchRemoteData'

function ModelTypeAddInput({setListChanged}:ModelTypeAddProps) {

    const initialState=''
    const [modelTypesName, setModelTypesName] = React.useState(initialState);
    const [isError, setIsError] = React.useState(false);
    const nameRef = React.useRef<HTMLInputElement>(null);
   
const handleTextChange=(event: React.ChangeEvent<HTMLInputElement>):void => {
  setModelTypesName(event.target.value);
    setIsError(false);  
  
}

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (!modelTypesName) {
            setIsError(true);
        } else {
          PostToApi( {modelTypesName:modelTypesName});
          setIsError(false);
          setListChanged(true)
        // modelTypeDataListandSetStateFunction[1](prevState =>  {  return   [...prevState,  {modelTypesId:"GIUD",modelTypesName:modelTypesName}] } );   
          nameRef.current!.value="";
       
        }
    }

  return (
<form onSubmit={handleSubmit}>
      <Box sx={{display: 'flex', flexWrap: 'wrap', '& > :not(style)': {   marginY: 1  }, }} >
   

      <Paper elevation={10}  sx={{width: 400}}>
       
        <Box sx={{ p: 0, margin:1, display: 'flex', flexDirection: 'column' }}>
       
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <h5> Add Model Type </h5>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <TextField id="standard-basic"
                            label="Model Type Name" 
                            variant="standard"  
                            onChange={handleTextChange}  
                            required
                            error={isError} // Set this based on your validation logic
                            helperText={isError ? 'Model Type Name is required' : ''}
                            inputRef ={nameRef}
                         />

                        
                    <Box sx={{ '& button': { marginTop: 2 } , marginLeft:2 }}>
                        {/* <Button variant="contained" size="small"   onClick={(e)=>handlerAddModelType(e,"AddButton")} > Add2 </Button> */}
                        <Button type='submit' variant="contained" size="small"   > Add </Button>

                    </Box>
                </Box>

        </Box>
      </Paper>
      
    </Box>
    </form>  
     
  )
}

export default ModelTypeAddInput