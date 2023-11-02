export interface DocumentTypeDTO {
  documentTypeName?: string ;
}

export interface HigherModelDTO {
  higherModelName?: string ;
  higherModelDescription?: string ;
  productId?: string ;
  capacity?: number;
}

export interface ModelCreateDTO {
  modelId?: string;
  modelName?: string ;
  modelTypesName?: string ;
}

export interface ModelDeleteDTO {
  modelId?: string;
}

export interface ModelRequestDTO {
  modelName?: string ;
}

export interface ModelTypeCreateDTO {
  modelTypesName?: string ;
}

export interface ModelTypeDeleteDTO {
  modelTypesId?: string;
}

export interface ModelTypeRequestDTO {
  modelTypesName?: string ;
}

export interface ModelTypeResponseDTO {
  modelTypesId?: string;
  modelTypesName?: string ;
}

export interface ModelTypeUpdateDTO {
  modelTypesId?: string;
  modelTypesName?: string ;
}

export interface ModelUpdateDTO {
  modelId?: string;
  modelName?: string ;
  modelTypesName?: string ;
}