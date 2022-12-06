import React from 'react'
import styles from './ImageList.module.css'
import add from '../../../../assets/add.png'
import remove from '../../../../assets/remove.png'
import { useState } from 'react';
import { useCallback } from 'react';

export default function ImageUrlInput({readonly, imageIndex, imageUrl, handleAdd, handleRemove}) {
  const [inputValue, setInputValue] = useState(imageUrl || '')

  const handleAddClick = useCallback(() =>{
      console.log("inputValue", inputValue)
      handleAdd(inputValue)
      setInputValue('')
  },[inputValue, handleAdd])

  const handleRemoveClick = useCallback (() =>{
      handleRemove(imageIndex)
  }, [imageIndex, handleRemove])

  return (
      <>
        <div className={styles.images_container}>
            <input type="text"
            onChange={(e) =>{setInputValue(e.target.value)}}
            // defaultValue={inputValue}
            value={inputValue}
            placeholder="URL de la imagen" 
            readOnly = {readonly}
            />
            {(
              !imageUrl ? 
              <img src={add} alt="add" onClick={handleAddClick}/> :
              <img src={remove} alt="remove" onClick={handleRemoveClick}/>
            )}
        </div>  
      </>
  )
}
