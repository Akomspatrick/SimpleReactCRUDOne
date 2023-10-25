import * as React from 'react';
import ModelTypeTable from '../components/ModelTypeTable';
import { Stack } from '@mui/material';
import { ModelTypeData, ModelTypeDataNew, ModelTypeDataProps } from '../models/ModelTypeData';
import ModelTypeAddInput from '../components/ModelTypeAddInput';
import axios from 'axios';




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
   const baseUrl= "http://localhost:5007/api/ModelType/GetAllAsync";
   return await fetch(baseUrl)
   .then(res => res.json())
   .then((data:ModelTypeDataNew[]) =>{ 
     console.log(data);   
    
     for (let index = 0; index < data.length; index++) {
         newRowsOfData.push({name:data[index].modelTypeId, calories:356+index});
         
        }
        console.log("newRowsOfData"+data.length); 
        console.log("newRowsOfData"); 
        console.log(newRowsOfData);
        console.log(data);
        console.log("newRowsOfData"); 
   return newRowsOfData;
   
   } )
}
   
export default function CRUDPage() {
   const [modelTypeDataList, setModelTypeDataList] = React.useState<ModelTypeData[]>( fetchdatalocaldata);
   const[loading,setLoading]=React.useState(false);
   const loadData =()=>{
      setLoading(true);
      const newRowsOfData :ModelTypeData[] = [];
      axios.get<ModelTypeDataNew[]>('http://localhost:5007/api/ModelType/GetAllAsync')
      .then(response =>{
         for (let index = 0; index < response.data.length; index++) {
            newRowsOfData.push({name:response.data[index].modelTypeId, calories:356+index});
          
           }
           console.log(response.data);
      })
      .catch((error)=>{ alert(error);})
      .finally(()=>{setLoading(false);});
      setModelTypeDataList(prev=> [...prev,...newRowsOfData]  )
   }
  
 React.useEffect(() => {
         fetchRemoteData().then((newRowsOfData:ModelTypeData[]) =>{
         setModelTypeDataList(prev=> [...prev,...newRowsOfData]  )
        } );
      
    }, []);
   const status = () =>{  return   (loading) ?  <h1 >Loading.......</h1> :   <h1 >NopesLoading.......</h1>       };
  return (
    <Stack   sx={{width: 400}} >
             
        
           {status()}
            <ModelTypeAddInput modelTypeData={modelTypeDataList}  setModelTypeDataListVr={setModelTypeDataList}  />    
            <ModelTypeTable modelTypeData={modelTypeDataList} setModelTypeDataListVr={setModelTypeDataList} />
        
   </Stack>
  );
}