import { ModelTypeData, ModelTypeDataNew } from '../models/ModelTypeData';

export const fetchRemoteData = async () => {
   const newRowsOfData: ModelTypeData[] = [];
   const baseUrl = "http://localhost:5007/api/ModelType/GetAllAsync";

   return await fetch(baseUrl)
      .then(res => res.json())
      .then((data: ModelTypeDataNew[]) => {
         console.log(data);

         for (let index = 0; index < data.length; index++) {
            newRowsOfData.push({ name: data[index].modelTypeId, calories: 356 + index });

         }
         return newRowsOfData;

      });
};


   // const loadData =()=>{
   //    setLoading(true);
   //    console.log("loadData...... true");
   //    const newRowsOfData :ModelTypeData[] = [];
   //    axios.get<ModelTypeDataNew[]>('http://localhost:5007/api/ModelType/GetAllAsync')
   //    .then(response =>{
   //       for (let index = 0; index < response.data.length; index++) {
   //          newRowsOfData.push({name:response.data[index].modelTypeId, calories:356+index});
          
   //         }
   //         console.log(response.data);
   //    })
   //    .catch((error)=>{ alert(error);})
   //    .finally(()=>{
   //       setLoading(false);
   //       console.log("Finished loadData...... false");
   //    });
   //    setModelTypeDataList(prev=> [...prev,...newRowsOfData]  )
   // }