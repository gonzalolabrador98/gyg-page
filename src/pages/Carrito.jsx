import React, { useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ModalForm from '../components/modal/ModalForm';
import { CartContext } from '../context/CartContext';
import 'animate.css';

export const Carrito = () => {
  const { carrito, suma, quitarProductoCarrito, limpiarProductoCarrito } =
    useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const closeModalyCarrito = () => {
    limpiarProductoCarrito();
    setIsOpen(false);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  if (!carrito.length) {
    return (
      <div className="animate__animated animate__fadeIn ">
        <h1 className="flex justify-center font-bold m-2 text-3xl">Carrito</h1>
        <div className="flex flex-col p-2 rounded overflow-hidden shadow-lg m-5 border border-gray-400">
          <h1 className="font-bold text-center text-xl p-10 ">
            El carrito está vacío
          </h1>
          <div className="flex justify-center">
            <NavLink to="/productos">
              <button
                type="button"
                className="m-1 bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
              >
                Volver al catálogo
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded overflow-hidden shadow-lg m-5 border border-gray-400 animate__animated animate__fadeIn">
      {carrito.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between gap-10 px-4 flex-wrap rounded overflow-hidden m-5 border border-gray-400 animate__animated animate__fadeIn"
        >
          <div className="flex gap-10 ">
            <img src={item.img} className="w-[100px]" />
            <div className="flex flex-col justify-center ">
              <h1 className="font-bold text-xl mb-2 ">{item.nombre}</h1>
              <p className="text-sm  ">Cantidad: {item.cantidad}</p>
              <p className="text-sm ">Precio: ${item.precio}</p>
            </div>
          </div>

          <div>
            <button
              onClick={() => quitarProductoCarrito(item)}
              type="button"
              className="m-5 flex self-end bg-transparent hover:bg-red-600 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <p className="font-bold text-center text-xl self-end mr-6">
        Total: ${suma}
      </p>
      <div className="flex justify-between">
        <NavLink to="/productos">
          <button
            type="button"
            className="m-5 max-w-[200px] flex self-end bg-transparent hover:bg-red-600 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
          >
            Seguir comprando
          </button>
        </NavLink>

        <ModalForm
          isOpen={isOpen}
          closeModal={closeModal}
          openModal={openModal}
          closeModalyCarrito={closeModalyCarrito}
          total={suma}
          carrito={carrito}
        />
      </div>
    </div>
  );
};
