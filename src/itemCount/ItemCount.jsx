import React from 'react';
import { useState } from 'react';

export const ItemCount = () => {
  const [count, setCount] = useState(10);

  const add = () => {
    if (count > 0) {
      console.log(`Se agregaron ${count} items a tu carrito`);
    } else {
      console.log('Seleccione una cantidad mayor a 0');
    }
  };

  const contador = (operacion) => {
    if (operacion == '+') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  if (count < 0) {
    setCount(0);
  }

  return (
    <div className="max-w-sm m-4 rounded  shadow-xl border border-black">
      <div className="  px-6 py-4 ">
        <div className="flex justify-center font-bold text-xl m-2 ">
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
            className=" m-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
