import React from 'react';
import { FiltroCategoria } from '../components/flitroCategoria/FiltroCategoria';
import { ItemListContainer } from '../itemList/ItemListContainer';
import 'animate.css';
export const Productos = () => {
  return (
    <>
      <FiltroCategoria />
      <ItemListContainer />
    </>
  );
};
