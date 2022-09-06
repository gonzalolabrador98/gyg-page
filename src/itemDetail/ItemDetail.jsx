import React from 'react';

export const ItemDetail = ({ onClose, stock, precio, marca }) => {
  return (
    <>
      <div className="mt-2">
        <p className="text-sm text-gray-500">Marca: {marca}</p>
        <p className="text-sm text-gray-500">Stock: {stock}</p>
        <p className="text-2xl text-black-500">Precio: ${precio}</p>
      </div>
      <button
        type="button"
        className="mt-3 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={onClose}
      >
        Volver
      </button>
    </>
  );
};
