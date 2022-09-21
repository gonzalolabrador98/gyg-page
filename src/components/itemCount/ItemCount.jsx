import React, { useState } from 'react';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from '../../context/CartContext';

export const ItemCount = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const { agregarProductoCarrito, quitarProductoCarrito } =
    useContext(CartContext);

  const agregarAlCarrito = (item, cantidad) => {
    const nuevoItem = { ...item, cantidad };
    agregarProductoCarrito(nuevoItem);
  };

  const contador = (operacion) => {
    if (operacion == '+') {
      if (cantidad < item.stock) setCantidad(cantidad + 1);
    } else {
      if (cantidad > 1) setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="max-w-sm   rounded">
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="text-center font-bold text-xl m-2">
        <h1>{cantidad}</h1>
      </div>
      <div></div>
      <div className="flex justify-center">
        <button
          onClick={() => contador('+')}
          className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
        <button
          onClick={() => contador('-')}
          className="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
      </div>
      <div className="flex m-1">
        <button
          onClick={() => agregarAlCarrito(item, cantidad)}
          className="m-1 bg-transparent hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
        >
          Agregar al carrito
        </button>
        <button
          onClick={() => quitarProductoCarrito(item)}
          className="m-1 bg-transparent text-l hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
        >
          Quitar del carrito
        </button>
      </div>
    </div>
  );
};
