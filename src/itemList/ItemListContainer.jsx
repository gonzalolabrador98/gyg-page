import React from 'react';
import { useState } from 'react';
import { items } from '../utils/items';

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  function consultarPromesa(confirmacion) {
    return new Promise((res, rej) => {
      if (confirmacion) {
        res(items);
      } else {
        rej('Acceso denegado');
      }
    });
  }

  consultarPromesa(true)
    .then((data) => {
      const productosJSX = data.map((item, idx) => {
        <div key={idx} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="" alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.nombre}</div>
            <p className="text-gray-700 text-base">{item.marca}</p>
            <p className="text-gray-700 text-base">{item.stock}</p>
            <p className="text-gray-700 text-base">{item.precio}</p>
          </div>
        </div>;
      });
      setProductos(productosJSX);
    })
    .catch((error) => {
      console.error(error);
    });

  return <>{productos}</>;
};
