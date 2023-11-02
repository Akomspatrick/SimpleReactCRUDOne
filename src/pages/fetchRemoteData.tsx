import { ModelTypeResponseDTO, ModelTypeDeleteDTO, ModelTypeCreateDTO } from '../models/DocumentVersionDTOs';

export const fetchRemoteData = async () => {
   const newRowsOfData: ModelTypeResponseDTO[] = [];
   const baseUrl = "http://localhost:5007/api/ModelType/GetAllAsync";

   return  fetch(baseUrl)
      .then(res => res.json())
      .then((data: ModelTypeResponseDTO[]) => {
         console.log(data);

         for (let index = 0; index < data.length; index++) {
            newRowsOfData.push({ modelTypesId: data[index].modelTypesId, modelTypesName: data[index].modelTypesName });

         }
         return newRowsOfData;

      });
};

export const PostToApi=( newValue:ModelTypeCreateDTO )=>{
   const baseUrl= "http://localhost:5007/api/ModelType";
  return  fetch(baseUrl, {
            method: 'POST',
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

  return  fetch(baseUrl, {
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