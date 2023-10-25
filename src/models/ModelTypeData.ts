export interface ModelTypeDataProps {
    modelTypeData:ModelTypeData[],
    setModelTypeDataListVr: React.Dispatch<React.SetStateAction<ModelTypeData[]>>
}

export interface ModelTypeData {
    name: string,
    calories: number
}

// Path: src/models/ModelTypeData.ts


export interface ModelTypeDataNew {
    modelTypeId: string,
    modelTypename: string
}