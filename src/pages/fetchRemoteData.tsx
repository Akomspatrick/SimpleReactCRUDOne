import { ModelTypeData, ModelTypeDeleteDTO } from '../models/ModelTypeData';

export const fetchRemoteData = async () => {
   const newRowsOfData: ModelTypeData[] = [];
   const baseUrl = "http://localhost:5007/api/ModelType/GetAllAsync";

   return  fetch(baseUrl)
      .then(res => res.json())
      .then((data: ModelTypeData[]) => {
         console.log(data);

         for (let index = 0; index < data.length; index++) {
            newRowsOfData.push({ modelTypeId: data[index].modelTypeId, modelTypeName: data[index].modelTypeName });

         }
         return newRowsOfData;

      });
};

export const PostToApi=( newValue:ModelTypeData )=>{
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


export const DeleteFromApi=( newValue:ModelTypeDeleteDTO )=>{
   const baseUrl= "http://localhost:5007/api/ModelType";

   fetch(baseUrl, {
       method: 'DELETE',
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