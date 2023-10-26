export interface ModelTypeDataProps {
    modelTypeData:ModelTypeData[],
    setModelTypeDataListVr: React.Dispatch<React.SetStateAction<ModelTypeData[]>>
   // setUpdateState: React.Dispatch<React.SetStateAction<string>>   
   setUpdateState: [string, React.Dispatch<React.SetStateAction<string>>]
}

export interface ModelTypeData {
    name: string,
    calories: number
}

// Path: src/models/ModelTypeData.ts


export interface ModelTypeDataNew {
    modelTypeId: string,
    modelTypeName: string
}

export interface ModelTypeEditDataProps {
    modelTypeData:ModelTypeData,
    //setModelTypeDataListVr: React.Dispatch<React.SetStateAction<ModelTypeData[]>>
   // setUpdateState: React.Dispatch<React.SetStateAction<string>>   
 // setUpdateState: [string, React.Dispatch<React.SetStateAction<string>>]
index:number 
  modelTypeDataListandSetStateFunction: [ModelTypeData[], React.Dispatch<React.SetStateAction<ModelTypeData[]>>]
}