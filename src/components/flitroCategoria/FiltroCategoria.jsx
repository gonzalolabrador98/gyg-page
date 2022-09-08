import React from 'react';
import { NavLink } from 'react-router-dom';

export const FiltroCategoria = () => {
  return (
    <div className="flex justify-center gap-4 py-4">
      <NavLink to="/categoria/papel">
        <button className="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
          Papel
        </button>
      </NavLink>
      <NavLink to="/categoria/limpieza">
        <button className="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
          Limpieza
        </button>
      </NavLink>
      <NavLink to="/categoria/bazar">
        <button className="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
          Bazar
        </button>
      </NavLink>
      <NavLink to="/productos">
        <button className="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
          Todos
        </button>
      </NavLink>
    </div>
  );
};
