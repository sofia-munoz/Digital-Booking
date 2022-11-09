import React from "react";
import { Link } from "react-router-dom";
import styles from '../productPage.module.css'


export default function ProductImageGallery ({productId}) {

    return (
        <div className={styles.main_product_galery}>
            <div className={styles.main_picture}><img src={pictures[3].img}/></div>
            <div className={styles.second_column_pictures}>
                <img src={pictures[1].img}/>
                <img src={pictures[2].img}/>
            </div>
            <div className={styles.second_column_pictures}>    
                <img src={pictures[0].img}/>
                <img src={pictures[4].img}/>
            </div>
            <Link to={`/products/${productId}/gallery`}><button className={styles.ver_mas}>Ver mas</button></Link>
        </div>
       
    )}

    const pictures = [
    {
      "img": "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/5c58ca90-9098-4940-bc5b-66c394ae90e2.jpeg?im_w=720",
    },
    {
      "img": "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/7b48d2c4-cf18-4c01-8896-3e46f1385c1e.jpeg?im_w=720",
      
    },
    {
      "img": "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/092bf974-607b-4d69-ad69-754168a14f6b.jpeg?im_w=720",
    },
    {
        "img": "https://a0.muscache.com/im/pictures/miso/Hosting-744605556125101370/original/411c288b-cb8e-4ec7-80e1-e7e2f83a894d.jpeg?im_w=1200",
      },
      {
        "img": "https://a0.muscache.com/im/pictures/2845fab8-229c-4257-a07e-491acb9a90b0.jpg?im_w=720",
      },
      {
        "img": "https://a0.muscache.com/im/pictures/d09587f8-841a-41b9-adf3-c5b038ffeb6b.jpg?im_w=720",
      }
  ];
