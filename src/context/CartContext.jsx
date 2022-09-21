import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

const CartProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProductoCarrito = (producto) => {
    const productoExistente = carrito.find((prod) => prod.id === producto.id);
    if (!productoExistente) {
      setCarrito((prevCarrito) => [...prevCarrito, producto]);
      toast('Producto agregado al carrito!', {
        icon: '✔',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          duration: 4000,
        },
      });
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

  const suma = carrito.reduce(
    (prev, curr) => prev + curr.precio * curr.cantidad,
    0
  );

  return (
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
  );
};

export { CartContext, CartProvider };
