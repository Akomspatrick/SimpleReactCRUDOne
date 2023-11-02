
import ModelTypeTable from '../components/ModelType/ModelTypeTable';
import { Stack } from '@mui/material';

import ModelTypeAddInput from '../components/ModelType/ModelTypeAdd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchRemoteData } from './fetchRemoteData';
import { ModelTypeResponseDTO } from '../models/DocumentVersionDTOs';




export default function CRUDPage() {
   const [modelTypeDataList, setModelTypeDataList] = useState<ModelTypeResponseDTO[]>([]);
   const [updateState      , setUpdateState    ] = useState("UpdateButton");
   const [listChanged, SetListChanged] = useState(false);
   const updates = useState("UpdateButton");
   const[loading,setLoading]=useState(false);

  
useEffect(() => {
         setLoading(true);  
         console.log("loadData...... true");
         fetchRemoteData().then((newRowsOfData:ModelTypeResponseDTO[]) =>{
         setModelTypeDataList(prev=> [...newRowsOfData]  )
         setLoading(false);
         console.log("Finished loadData...... false");
         SetListChanged(false)
        } );
      
    }, [listChanged]);
   const status = () =>{  return   (loading) ?  <h1 >Loading.......</h1> :   <h1 ></h1>       };
  return (
    <Stack   sx={{width: 400}} >
             
        
           {status()}
            <ModelTypeAddInput setListChanged={SetListChanged} />    
            <ModelTypeTable modelTypeData={modelTypeDataList} setModelTypeDataListVr={setModelTypeDataList} 
               setUpdateState={[updateState      , setUpdateState    ] }  
               setListChanged={SetListChanged}/>
        
   </Stack>
  );
}