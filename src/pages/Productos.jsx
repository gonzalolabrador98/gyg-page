import React from 'react';
import { FiltroCategoria } from '../components/flitroCategoria/FiltroCategoria';
import { ItemListContainer } from '../components/itemList/ItemListContainer';
import 'animate.css';
export const Productos = () => {
  return (
    <>
      <FiltroCategoria />
      <ItemListContainer />
    </>
  );
};
