import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();

const CartProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  console.log(carrito);

  const agregarProductoCarrito = (producto) => {
    const productoExistente = carrito.find((prod) => prod.id === producto.id);
    if (!productoExistente) {
      setCarrito((prevCarrito) => [...prevCarrito, producto]);
    }
  };

  const quitarProductoCarrito = (producto) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((prod) => prod.id !== producto.id)
    );
  };

  const limpiarProductoCarrito = () => {
    setCarrito([]);
  };

  const suma = carrito.reduce((prev, curr) => prev + curr.precio, 0);

  return (
    <div>
      <CartContext.Provider
        value={{
          carrito,
          agregarProductoCarrito,
          quitarProductoCarrito,
          limpiarProductoCarrito,
          suma,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export { CartContext, CartProvider };
