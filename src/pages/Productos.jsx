import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiltroCategoria } from '../components/flitroCategoria/FiltroCategoria';
import { ItemListContainer } from '../itemList/ItemListContainer';

export const Productos = () => {
  return (
    <div>
      <FiltroCategoria />
      <ItemListContainer />
    </div>
  );
};
