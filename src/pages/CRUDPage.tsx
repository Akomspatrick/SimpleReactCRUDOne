
import ModelTypeTable from '../components/ModelTypeTable';
import { Stack } from '@mui/material';
import { ModelTypeData, ModelTypeDataProps } from '../models/ModelTypeData';
import ModelTypeAddInput from '../components/ModelTypeAddInput';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchRemoteData } from './fetchRemoteData';




const fetchdatalocaldata =  ()=> {
const rowsOfData :ModelTypeData[] = [];
rowsOfData.push({name:'Frozen yoghurt', calories:159});
rowsOfData.push({name:'Ice cream sandwich', calories:237});
rowsOfData.push({name:'Eclair', calories:262});
rowsOfData.push({name:'Cupcake', calories:305});
rowsOfData.push({name:'Gingerbread', calories:356});
return rowsOfData;

} 



export default function CRUDPage() {
   const [modelTypeDataList, setModelTypeDataList] = useState<ModelTypeData[]>( fetchdatalocaldata);
   const [updateState      , setUpdateState    ] = useState("UpdateButton");
   const updates = useState("UpdateButton");
   const[loading,setLoading]=useState(false);

  
useEffect(() => {
         setLoading(true);
         console.log("loadData...... true");
         fetchRemoteData().then((newRowsOfData:ModelTypeData[]) =>{
         setModelTypeDataList(prev=> [...prev,...newRowsOfData]  )
         setLoading(false);
         console.log("Finished loadData...... false");

        } );
      
    }, []);
   const status = () =>{  return   (loading) ?  <h1 >Loading.......</h1> :   <h1 >NopesLoading.......</h1>       };
  return (
    <Stack   sx={{width: 400}} >
             
        
           {status()}
            <ModelTypeAddInput modelTypeData={modelTypeDataList}  setModelTypeDataListVr={setModelTypeDataList}  setUpdateState={[updateState      , setUpdateState    ] } />    
            <ModelTypeTable modelTypeData={modelTypeDataList} setModelTypeDataListVr={setModelTypeDataList} setUpdateState={[updateState      , setUpdateState    ] }/>
        
   </Stack>
  );
}