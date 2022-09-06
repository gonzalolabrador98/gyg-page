import React, { useEffect } from 'react';
import { useState } from 'react';
import { items } from '../utils/items';

function consultarPromesa(confirmacion) {
  return new Promise((res, rej) => {
    if (confirmacion) {
      res(items);
    } else {
      rej('Acceso denegado');
    }
  });
}

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarPromesa(true)
      .then((data) => {
        setProductos(data);
        console.log(productos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {productos.map((item, idx) => (
        <div
          key={idx}
          className="max-w-sm rounded overflow-hidden shadow-lg m-2"
        >
          <img className="w-full" src="" alt="" />
          <div className=" px-6 py-4">
            <div className="font-bold text-xl mb-2">Nombre: {item.nombre}</div>
            <p className="text-gray-700 text-base">Marca: {item.marca}</p>
            <p className="text-gray-700 text-base">Stock: {item.stock}</p>
            <p className="text-gray-700 text-base">Precio: ${item.precio}</p>
          </div>
        </div>
      ))}
    </>
  );
};
