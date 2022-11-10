import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './gallery.module.css'
import useScreenSize from "../../hooks/useScreenSize";


export default function Gallery ({onClick, showGallery, images}) {
const { width } = useScreenSize();
const galleryImages = [];

images.forEach(img => {
  galleryImages.push(
    {
      original: img,
      thumbnail: img
    }
  );
});

    return (
      <div className={styles.container}>
        {showGallery&&<button onClick={onClick} className={styles.close_gallery_button}>X</button>}
        {width<480?
        <ImageGallery showThumbnails={false} items={galleryImages} showIndex={true}
        autoPlay={true} showPlayButton={false} showFullscreenButton={false} showBullets={true}/>
        :
        <ImageGallery showThumbnails={true} items={galleryImages} showIndex={true}
                      showPlayButton={false} additionalClass={styles.image} autoPlay={true}/>}    
      </div>
    );
}

