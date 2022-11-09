import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './gallery.module.css'
import useScreenSize from "../../hooks/useScreenSize";
import { Link, useParams } from "react-router-dom";

export default function Gallery ({productId, closeButton}) {
const { width } = useScreenSize();
console.log("Gallery "+productId);
const { id } = useParams();
    return (
      <div className={styles.container}>
        {closeButton&&<Link to={`/products/${id}`}><button className={styles.close_gallery_button}>X</button></Link>}
        {width<480?
        <ImageGallery showThumbnails={false} items={_IMAGES} showIndex={true}
        autoPlay={true} showPlayButton={false} showFullscreenButton={false} showBullets={true}/>
        :
        <ImageGallery showThumbnails={true} items={_IMAGES} showIndex={true}
                      showPlayButton={false} additionalClass={styles.image} autoPlay={true}/>}    
      </div>
    );
}

const _IMAGES = [
    {
      original: "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/5c58ca90-9098-4940-bc5b-66c394ae90e2.jpeg?im_w=720",
      thumbnail: "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/5c58ca90-9098-4940-bc5b-66c394ae90e2.jpeg?im_w=720"
    },
    {
      original: "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/7b48d2c4-cf18-4c01-8896-3e46f1385c1e.jpeg?im_w=720",
      thumbnail: "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/7b48d2c4-cf18-4c01-8896-3e46f1385c1e.jpeg?im_w=720"
    },
    {
      original: "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/092bf974-607b-4d69-ad69-754168a14f6b.jpeg?im_w=720",
      thumbnail: "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/092bf974-607b-4d69-ad69-754168a14f6b.jpeg?im_w=720"
    },
    {
        original: "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/411c288b-cb8e-4ec7-80e1-e7e2f83a894d.jpeg?im_w=1200",
        thumbnail: "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/411c288b-cb8e-4ec7-80e1-e7e2f83a894d.jpeg?im_w=1200"
      },
      {
        original: "https://a0.muscache.com/im/pictures/2845fab8-229c-4257-a07e-491acb9a90b0.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/2845fab8-229c-4257-a07e-491acb9a90b0.jpg?im_w=720"
      },
  ];
