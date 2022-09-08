import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ITEMS } from '../utils/ITEMS';

function consultarPromesa(confirmacion) {
  return new Promise((res, rej) => {
    if (confirmacion) {
      res(ITEMS);
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
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex gap-1 justify-center flex-wrap">
      {productos.map((item, idx) => (
        <div
          key={idx}
          className="w-[300px] max-w-[300px]  rounded overflow-hidden shadow-lg m-2 border border-gray-400"
        >
          <img className="w-full" src="" alt="" />
          <div className=" px-6 py-4 text-center">
            <img className="w-full" src={item.img} />
            <div className="font-bold text-l mb-2">{item.nombre}</div>

            <p className="text-gray-700 text-base">Marca: {item.marca}</p>
            <p className="text-gray-700 text-base">Stock: {item.stock}</p>
            <p className="text-gray-700 text-base">Precio: ${item.precio}</p>
          </div>
          <div className="flex justify-center m-2">
            <NavLink to={`/item/${item.id}`}>
              <button className="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
                Detalles del producto
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};
