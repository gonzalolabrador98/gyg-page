import React from 'react';
import { FiltroCategoria } from '../components/flitroCategoria/FiltroCategoria';
import { ItemListContainer } from '../itemList/ItemListContainer';

export const Productos = () => {
  return (
    <div>
      <h1 className="flex justify-center font-bold m-2 text-3xl">Productos</h1>
      <FiltroCategoria />
      <ItemListContainer />
    </div>
  );
};
