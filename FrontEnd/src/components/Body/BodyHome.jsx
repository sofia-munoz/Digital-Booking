import React, {useState, useEffect} from "react";
import Buscador from "./BodyComponents/Buscador";
import ListaCategorias from "./BodyComponents/ListaCategorias";
import ListaProductos from "./BodyComponents/ListaProductos.jsx";


  const urlCategorias = 'http://52.14.221.16:8081/categorias'
  const urlProductos = 'http://52.14.221.16:8081/productos'
  const settings ={
                   method: 'GET',
                   headers: {
                          'Content-Type': 'application/json'
                   } 
                  }

export default function BodyHome() {
  
  const [productInfo, setProductInfo] = useState([])
  const [categoryInfo, setCategoryInfo] = useState([])

    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlCategorias, settings)
                  console.log(response)
                  const data = await response.json()
                  console.log(data)
                  setCategoryInfo(data) 
              } catch (error){
                  console.error(error)
              }
            })
              }, [  ])
    
    useEffect(() => {
            Promise.resolve().then(async function(){
              try{
                  const response = await fetch (urlProductos, settings)
                  console.log(response)
                  const data = await response.json()
                  console.log(data)
                  setProductInfo(data) 
              } catch (error){
                  console.error(error)
              }
            })
              }, [  ])

  return (
    <>
      <Buscador />
      <ListaCategorias info={categoryInfo} />
      <ListaProductos productInfo={productInfo}/>
    </>
  )
} 
//   
//   const [productCard, setProductCard] = useState(null)
//     
//     const urlProductos = 'http:localhost:8080/productos'
//     
    
   

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
