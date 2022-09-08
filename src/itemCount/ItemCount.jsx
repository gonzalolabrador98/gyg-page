import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const ItemCount = () => {
  const [count, setCount] = useState(1);

  const add = () => {
    if (count > 0) {
      console.log(`Se agregaron ${count} ITEMS a tu carrito`);
    }
  };

  const contador = (operacion) => {
    if (operacion == '+') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  if (count == 0) {
    setCount(1);
  }

  return (
    <div className="max-w-sm  m-4 rounded">
      <div className="text-center font-bold text-xl m-2">
        <h1>{count}</h1>
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
      <div className="flex justify-center">
        <button
          onClick={add}
          className="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
        >
          Agregar al carrito
        </button>
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
};
