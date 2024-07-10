// import React, { useState } from 'react';
// // Importa React y useState desde la librería 'react'
// import './ProductCard.css';
// // Importa los estilos específicos para este componente desde './ProductCard.css'
// import { useNavigate } from 'react-router-dom';
// // Importa useNavigate desde 'react-router-dom' para la navegación
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // Importa FontAwesomeIcon desde '@fortawesome/react-fontawesome' para usar iconos
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// // Importa el icono faHeart (corazón sólido) desde '@fortawesome/free-solid-svg-icons'
// import { ConexionApi } from '../../../hooks/conexion-api';
// // Importa ConexionApi desde '../../../hooks/conexion-api' para realizar operaciones de API
// const placeholderImage = 'https://via.placeholder.com/200'; // URL de la imagen placeholder
//   const ProductCard = ({ product, onDelete }) => {
//     // Define el componente funcional ProductCard que recibe las props 'product' y 'onDelete'
//     const { actualizarProduct } = ConexionApi();
//     // Obtiene la función actualizarProduct desde ConexionApi para actualizar el producto
//     const { id, imagen, nombre, descripcion, precio, esFavorito } = product;
//     // Extrae las propiedades del producto desde las props recibidas
//     const imageUrl = imagen || placeholderImage;
//     // Define la URL de la imagen del producto, utilizando una imagen placeholder si no hay imagen
//     const navigate = useNavigate();
//     // Obtiene la función navigate de useNavigate para la navegación
//     const [isFavorite, setIsFavorite] = useState(esFavorito || false);
//     // Define el estado isFavorite para determinar si el producto es favorito, inicialmente se establece desde la prop 'esFavorito'
//     const [showModal, setShowModal] = useState(false);
//     // Define el estado showModal para controlar la visualización del modal de confirmación
//     const toggleFavorite = () => {
//       // Función para alternar el estado de favorito del producto
//       setIsFavorite(!isFavorite); // Invierte el estado actual de isFavorite
//       actualizarProduct({ ...product, esFavorito: !isFavorite });
//       // Llama a actualizarProduct para actualizar el estado de favorito del producto en la API
//     };
//     const handleDelete = () => {
//       // Función para manejar la eliminación del producto
//       onDelete(id); // Llama a la función onDelete pasando el ID del producto
//       setShowModal(false); // Oculta el modal después de confirmar la eliminación
//     };
//     return (
//       <>
//         {/* Renderiza la tarjeta del producto */}
//         <div className="product-card">
//           <img src={imageUrl} alt={nombre} className="product-image" />
//           {/* Renderiza la imagen del producto */}
//           <div className="product-info">
//             {/* Renderiza la información del producto */}
//             <h3>{nombre}</h3>
//             {/* Renderiza el nombre del producto */}
//             <p>{descripcion}</p>
//             {/* Renderiza la descripción del producto */}
//             <p className="product-price">${precio}</p>
//             {/* Renderiza el precio del producto */}
//             <div className='action-buttons'>
//               {/* Renderiza los botones de acción */}
//               <button className="delete-button" onClick={() => setShowModal(true)}>Eliminar</button>
//               {/* Botón para mostrar el modal de confirmación de eliminación */}
//               <button className="delete-button" onClick={() => { navigate(`/edit-product/${id}`); }}>Editar</button>
//               {/* Botón para navegar a la página de edición del producto */}
//               <button className="favorite-button" onClick={toggleFavorite}>
//                 {/* Botón para agregar/quitar de favoritos */}
//                 <FontAwesomeIcon icon={faHeart} className={isFavorite ? 'favorite-icon selected' : 'favorite-icon'} />
//                 {/* Icono de corazón que cambia de color si el producto es favorito */}
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Fin de la tarjeta del producto */}
//         {/* Modal de confirmación de eliminación */}
//         {
//           showModal && (
//             <div className="modal">
//               <div className="modal-content">
//                 <p>¿Estás seguro de que deseas eliminar este producto?</p>
//                 {/* Mensaje de confirmación de eliminación */}
//                 <div className="modal-actions">
//                   {/* Acciones del modal */}
//                   <button className="modal-button cancel" onClick={() => setShowModal(false)}>Cancelar</button>
//                   {/* Botón para cancelar la eliminación */}
//                   <button className="modal-button confirm" onClick={handleDelete}>Aceptar</button>
//                   {/* Botón para confirmar la eliminación */}
//                 </div>
//               </div>
//             </div>
//           )
//         }
//         {/* Fin del modal de confirmación de eliminación */}
//       </>
//     );
//   };
//   export default ProductCard;
//   // Exporta el componente ProductCard como el componente por defecto de este archivo