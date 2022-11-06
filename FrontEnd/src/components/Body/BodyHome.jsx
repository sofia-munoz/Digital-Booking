import React from "react";
// import CardCategoria from "../CardCategoria"; , { useState, useEffect }
// import Card from "../Card";

import Buscador from "./BodyComponents/Buscador";
import ListaCategorias from "./BodyComponents/ListaCategorias";
import ListaProductos from "./BodyComponents/ListaProductos.jsx";
// import {getCiudades} from '../../data/ciudades'
// import CategoryLoadingCard from "../CategoryLoadingCard";
// import ProductLoadingCard from "../ProductLoadingCard";

export default function BodyHome() {
  return (
    <>
      <Buscador />
      <ListaCategorias />
      <ListaProductos />
    </>
  )
} 
//   const [categoryCard, setCategoryCard] = useState(null)
//   const [productCard, setProductCard] = useState(null)
//     const urlCategorias = 'http:localhost:8080/categorias'
//     const urlProductos = 'http:localhost:8080/productos'
//     const settings ={
//                    method: 'GET'
//                   }
    
//     useEffect(() => {
//             fetch(urlCategorias, settings)
//               .then((response) => response.json())
//               .then(data => setCategoryCard(data))
//               .catch((err) => console.error(err))
//     }, [  ])   

//     useEffect(() => {
//             fetch(urlProductos, settings)
//               .then((response) => response.json())
//               .then(data => setProductCard(data))
//               .catch((err) => console.error(err))
//     }, [  ])       
  
//     console.log("API result: " + categoryCard)

//     return (
//     <>
//       <Buscador dataCiudades={getCiudades()}/>
//       <div className="container-categorias">
//         <h2>Buscar por tipo de alojamiento </h2>
//         <div className="card-container-categoria">
//             {!categoryCard&& Array(4).fill(<CategoryLoadingCard/>) }
//             {categoryCard&&(categoryCard.map((data, index) => (
//                     <CardCategoria title={data.titulo} 
//                                   img={data.imagenURL} 
//                                   info={data.descripcion} 
//                                   key={index}
//                                   id={data.id}/>)
//                   ))} 
//         </div>
//       </div>
//       <div className="container-recomendaciones">
//         <h2> Recomendaciones </h2>
//         <div className="card-container">
//             {!productCard&&(Array(8).fill(<ProductLoadingCard/>))}
//             {productCard&&
//                 (productCard.map((data, index) => (
//                       <Card nombre={data.titulo}
//                             img={data.imagen_principal}
//                             categoria={data.categoria.titulo}
//                             ubicacion={data.ubicacion}
//                             descripcion={data.descripcion}
//                             key={index}
//                             id={data.id}/>)
//             ))}
//         </div>
//         </div>
//     </>
//   );
// }
