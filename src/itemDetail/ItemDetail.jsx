import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ItemCount } from '../components/itemCount/ItemCount';
import { getItem } from '../utils/helper';

export const ItemDetail = () => {
  const { id } = useParams();
  const item = getItem(id);

  return (
    <div className="flex justify-center">
      <div className="w-[300px] max-w-[300px]  rounded overflow-hidden shadow-lg m-2 border border-gray-400">
        <div>
          <img className="w-full" src="" alt="" />
          <div className=" px-6 py-4 text-center">
            <img className="w-full" src={item.img} />
            <div className="font-bold text-l mb-2">{item.nombre}</div>
            <p className=" text-base">Marca: {item.marca}</p>
            <p className=" text-base">Stock: {item.stock}</p>
            <p className=" text-base">Precio: ${item.precio}</p>
          </div>
        </div>
        <div className="mb-2 flex flex-col items-center">
          <ItemCount item={item} />

          <NavLink to="/carrito">
            <button
              type="button"
              className="m-1  bg-transparent hover:bg-green-600 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
            >
              Comprar
            </button>
          </NavLink>
          <NavLink to="/productos">
            <button
              type="button"
              className="m-1  bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
            >
              Volver al catálogo
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
