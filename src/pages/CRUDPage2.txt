import * as React from 'react';
import ModelTypeTable from '../components/ModelTypeTable';
import { Stack } from '@mui/material';
import { ModelTypeData, ModelTypeDataNew, ModelTypeDataProps } from '../models/ModelTypeData';
import ModelTypeAddInput from '../components/ModelTypeAddInput';




const fetchdatalocaldata =  ()=> {
const rowsOfData :ModelTypeData[] = [];
rowsOfData.push({name:'Frozen yoghurt', calories:159});
rowsOfData.push({name:'Ice cream sandwich', calories:237});
rowsOfData.push({name:'Eclair', calories:262});
rowsOfData.push({name:'Cupcake', calories:305});
rowsOfData.push({name:'Gingerbread', calories:356});
return rowsOfData;

} 

const fetchRemoteData =  async () => {
   const newRowsOfData :ModelTypeData[] = [];
   const baseUrl= "http://localhost:5007/api/Model/GetAllAsync";
   return await fetch(baseUrl)
   .then(res => res.json())
   .then((data:ModelTypeDataNew[]) =>{ 
     console.log(data);   
    
     for (let index = 0; index < data.length; index++) {
         newRowsOfData.push({name:data[index].modelTypeId, calories:356+index});
         console.log(data);
        }
   return newRowsOfData;
   
   } )
}
   
export default function CRUDPage2() {
  
   const [modelTypeDataList, setModelTypeDataList] = React.useState<ModelTypeData[]>( fetchdatalocaldata);
 React.useEffect(() => {
         fetchRemoteData().then((newRowsOfData:ModelTypeData[]) =>{
         setModelTypeDataList(prev=> [...prev,...newRowsOfData]  )
        } );
      
    }, []);
     
  return (
    <Stack   sx={{width: 400}} >
            {/* <ModelTypeAddInput modelTypeData={modelTypeDataList}  setModelTypeDataListVr={setModelTypeDataList}  />    
            <ModelTypeTable modelTypeData={modelTypeDataList} setModelTypeDataListVr={setModelTypeDataList} /> */}
        
   </Stack>
  );
}