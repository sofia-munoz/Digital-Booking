import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './gallery.module.css'
import useScreenSize from "../../hooks/useScreenSize";

export default function Gallery () {
  const { width } = useScreenSize();
    return (
      <div className={styles.container}>
        {width<480?
        <ImageGallery showThumbnails={false} items={_IMAGES} showIndex={true}
        autoPlay={true} showPlayButton={false} showFullscreenButton={false} showBullets={true}/>
        :
        <ImageGallery showThumbnails={true} items={_IMAGES} showIndex={true}
                      showPlayButton={true} additionalClass={styles.image} autoPlay={false}/>}    
      </div>
    );
}

const _IMAGES = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/"
    },
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/"
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
      }
  ];
