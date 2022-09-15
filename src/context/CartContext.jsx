import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

const CartProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProductoCarrito = (producto) => {
    const productoExistente = carrito.find((prod) => prod.id === producto.id);
    if (!productoExistente) {
      setCarrito((prevCarrito) => [...prevCarrito, producto]);
    }
  };

  const quitarProductoCarrito = (producto) => {
    const auxCarrito = carrito;
    let indice = carrito.findIndex((prod) => prod.id == producto.id);
    auxCarrito.splice(indice, 1);
    setCarrito(auxCarrito);
  };

  const limpiarProductoCarrito = () => {
    setCarrito([]);
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          carrito,
          agregarProductoCarrito,
          quitarProductoCarrito,
          limpiarProductoCarrito,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export { CartContext, CartProvider };
