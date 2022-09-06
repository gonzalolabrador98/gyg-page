import React from 'react';
import { useState } from 'react';
import { Modal } from '../components/Modal';
import { ItemDetail } from '../itemDetail/ItemDetail';

export const ItemCount = ({ item }) => {
  const [count, setCount] = useState(1);
  const [showDetail, setShowDetail] = useState(false);

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };

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
      <div className="flex justify-center">
        <button
          onClick={handleShowDetail}
          className="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
        >
          Detalles del producto
        </button>
      </div>
      <Modal
        nombre={item.nombre}
        onClose={handleShowDetail}
        isOpen={showDetail}
        imagen={item.img}
        children={
          <ItemDetail
            onClose={handleShowDetail}
            stock={item.stock}
            precio={item.precio}
            marca={item.marca}
          />
        }
      ></Modal>
    </div>
  );
};
