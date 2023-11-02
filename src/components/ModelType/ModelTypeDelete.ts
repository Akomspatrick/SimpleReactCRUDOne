import React from 'react'
import { ModelTypeDeleteInputProps } from '../../models/DocumentVersionProps'
import { DeleteFromApi } from '../../pages/fetchRemoteData';

function ModelTypeDelete  (  {setListChanged,modelTypeDeleteDTO} :ModelTypeDeleteInputProps) {
      DeleteFromApi(modelTypeDeleteDTO);
      setListChanged(true);
      alert("ModelTypeDelete");
 
}

export default ModelTypeDelete