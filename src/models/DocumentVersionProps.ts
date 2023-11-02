import { ModelTypeCreateDTO, ModelTypeDeleteDTO, ModelTypeResponseDTO } from "./DocumentVersionDTOs"


export interface ModelTypeTableProps {
    modelTypeData:ModelTypeResponseDTO[],
    setModelTypeDataListVr: React.Dispatch<React.SetStateAction<ModelTypeResponseDTO[]>>
    
   setUpdateState: [string, React.Dispatch<React.SetStateAction<string>>],
   setListChanged:  React.Dispatch<React.SetStateAction<boolean>>
}

export interface ModelTypeEditDataProps {
    modelTypeData:ModelTypeResponseDTO,
    index:number 
   modelTypeDataListandSetStateFunction: [ModelTypeResponseDTO[], React.Dispatch<React.SetStateAction<ModelTypeResponseDTO[]>>]
}




export interface ModelTypeAddProps {
    setListChanged:  React.Dispatch<React.SetStateAction<boolean>>,
    // modelTypeData:ModelTypeCreateDTO,
    // index:number 
    // modelTypeDataListandSetStateFunction: [ModelTypeResponseDTO[], React.Dispatch<React.SetStateAction<ModelTypeResponseDTO[]>>]
}

export interface ModelTypeDeleteInputProps {
    setListChanged:  React.Dispatch<React.SetStateAction<boolean>>,
    modelTypeDeleteDTO:ModelTypeDeleteDTO,
    // index:number 
    // modelTypeDataListandSetStateFunction: [ModelTypeResponseDTO[], React.Dispatch<React.SetStateAction<ModelTypeResponseDTO[]>>]
}

