import React, { useState } from 'react';

export const ItemCount = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  const agregarAlCarrito = (item) => {
    const productoCarrito = { id: item.id, cantidad: cantidad };
    console.log(productoCarrito);
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
      <div className="text-center font-bold text-xl m-2">
        <h1>{cantidad}</h1>
      </div>
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
      <button
        onClick={() => agregarAlCarrito(item)}
        className="m-1 bg-transparent hover:bg-yellow-500 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
};
