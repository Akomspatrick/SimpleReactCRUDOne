import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import React from 'react'
import { ModelTypeData, ModelTypeDataProps } from '../models/ModelTypeData'

function ModelTypeAddInput({modelTypeData,setModelTypeDataListVr}:ModelTypeDataProps) {

    const initialState=''
    const [modelTypeId, setmodelTypeId] = React.useState(initialState);
    const [isError, setIsError] = React.useState(false);
    const nameRef = React.useRef<HTMLInputElement>(null);
   

    const  handlerAddModelType= (event: React.MouseEvent<HTMLButtonElement, MouseEvent>,btnType :string): void => {
        // throw new Error('Function not implemented.');
        event.preventDefault();
       
          console.log(btnType);
     }
const handleTextChange=(event: React.ChangeEvent<HTMLInputElement>):void => {
    setmodelTypeId(event.target.value);
    setIsError(false);  
  
}

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
  
        event.preventDefault();
        if (!modelTypeId) {
          setIsError(true);
        } else {
          setIsError(false);
        //  const value = {name:modelTypeName,calories:100};
        //  setModelTypeDataList((prevState) =>  {  return     prevState.concat(value) } );
          //setModelTypeDataList([...modelTypeDataList,{name:modelTypeName,calories:100}]);
         // const value = {name:modelTypeName,calories:100};
          //setModelTypeDataList((prevState) =>             [...prevState, value]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );
          // corect setModelTypeDataList((prevState) =>             [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );       //setModelTypeDataList((prevState) => [...prevState, {name:modelTypeName,calories:100} ]  );
          setModelTypeDataListVr(prevState =>  {  return   [...prevState,  {modelTypeId:modelTypeId,modelTypeName:modelTypeId}] } );
         
          nameRef.current!.value="";//?.setSelectionRange(0, 99999);
       
        }
    }

  return (
<form onSubmit={handleSubmit}>
           <Box sx={{display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
      m: 1  }, }} >

      <Paper elevation={10}  sx={{width: 400}}>
       
        <Box sx={{ p: 0, margin:8, display: 'flex', flexDirection: 'column' }}>
       
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <h3>SPECIFY MODEL TYPE</h3>
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

                        
                    <Box sx={{ '& button': { m: 1 } , marginBottom:0 }}>
                        {/* <Button variant="contained" size="small"   onClick={(e)=>handlerAddModelType(e,"AddButton")} > Add2 </Button> */}
                        <Button type='submit' variant="contained" size="small"   > Add2 </Button>

                    </Box>
                </Box>

        </Box>
      </Paper>
      
    </Box>
    </form>  
     
  )
}

export default ModelTypeAddInput