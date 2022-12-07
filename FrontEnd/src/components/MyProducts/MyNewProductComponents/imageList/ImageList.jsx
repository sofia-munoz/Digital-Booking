import React from 'react'
import ImageUrlInput from "./ImageUrlInput"

export default function ImageList({imageList, setImageList}) {

const handleAdd = (imgUrlInput) =>{
  if(imgUrlInput === "") return;

  let updatedList = [...imageList, imgUrlInput]
  setImageList(updatedList)
  console.log("imageList add updatedList:", updatedList)
}

const handleRemove = (removeIndex) =>{
  let list = [...imageList]
  console.log('removeIndex ', removeIndex)
  list.splice(removeIndex, 1)
  console.log("imageList remove imageList | list", imageList, list)
  setImageList(list)
}

  return (
      <>
        {imageList.map((image, key)=>
          <ImageUrlInput key={image} readonly imageIndex={key} imageUrl={image} handleRemove={handleRemove}/>
        )}
          
          <ImageUrlInput handleAdd={handleAdd}/>
      </>
  )
}
