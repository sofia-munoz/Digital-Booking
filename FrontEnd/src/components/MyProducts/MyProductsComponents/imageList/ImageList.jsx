import React from 'react'
import styles from './ImageList.module.css'
import add from '../../../../assets/add.png'

export default function ImageList({imageUrl, setImageUrl}) {

  const HandleAddImage = ()=>{
      
  }

  return (
      <>
        <div className={styles.images_container}>
            <input type="text" onChange={(e) =>{setImageUrl(e.target.value)}} value={imageUrl} placeholder="URL de la imagen"/>
            <img src={add} alt="add" onClick={HandleAddImage()}/>
        </div>  
      </>
  )
}
