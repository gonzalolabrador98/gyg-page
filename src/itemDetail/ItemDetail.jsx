import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ItemCount } from '../itemCount/ItemCount';
import { getItem } from '../utils/helper';

export const ItemDetail = () => {
  const { id } = useParams();
  const item = getItem(id);

  return (
    <div className="flex justify-center">
      <div className="w-[300px] max-w-[300px]  rounded overflow-hidden shadow-lg m-2 border border-gray-400">
        <img className="w-full" src="" alt="" />
        <div className=" px-6 py-4 text-center">
          <img className="w-full" src={item.img} />
          <div className="font-bold text-l mb-2">{item.nombre}</div>

          <p className="text-gray-700 text-base">Marca: {item.marca}</p>
          <p className="text-gray-700 text-base">Stock: {item.stock}</p>
          <p className="text-gray-700 text-base">Precio: ${item.precio}</p>
          <ItemCount />
          <NavLink to="/productos">
            <button
              type="button"
              className="mt-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Volver
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
