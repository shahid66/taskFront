import React, { useState } from 'react';

const ImagePreview = ({file,preFile}) => {
    const [preview,setPreview]=useState(preFile);
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
        setPreview(reader.result);
    }
  return (
    <div>
        <img height={"300px"} src={preview} alt="" />
    </div>
  )
}

export default ImagePreview