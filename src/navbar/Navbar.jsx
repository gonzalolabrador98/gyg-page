import React, { useContext, useState } from 'react';
import { CartWidget } from './CartWidget';
import { Disclosure, Switch } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { Link, NavLink } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
import { CartContext } from '../context/CartContext';
import logo from '../assets/gyglogo.png';

export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { limpiarProductoCarrito } = useContext(CartContext);

  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div
              className={`${
                darkMode ? 'darkMode shadow' : 'lightMode shadow'
              } max-w-full mx-auto px-2 sm:px-4 lg:px-8`}
            >
              <div className="flex justify-between h-16">
                <div className="flex px-2 lg:px-0">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink to="/home">
                      <img
                        className="hidden lg:block h-12 w-auto "
                        src={logo}
                        alt="Workflow"
                      />
                    </NavLink>
                  </div>
                  <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <Link
                      to="/home"
                      className="border-transparent  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Inicio
                    </Link>
                    <Link
                      to="/productos"
                      className="border-transparent  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Productos
                    </Link>
                    <Link
                      to="/contacto"
                      className="border-transparent  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Contacto
                    </Link>
                    <Link
                      to="/sobrenosotros"
                      className="border-transparent  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Sobre Nosotros
                    </Link>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="flex  items-center ">
                    <Switch
                      checked={enabled}
                      onClick={() => toggleDarkMode()}
                      onChange={setEnabled}
                      className={`${
                        enabled ? 'bg-white' : 'bg-gray-900'
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span
                        className={`${
                          enabled
                            ? 'translate-x-6 bg-black bg-black'
                            : 'translate-x-1 bg-white bg-gray-300 '
                        } inline-block h-4 w-4 transform rounded-full  transition`}
                      />
                    </Switch>
                  </div>
                  <div className="m-5">
                    <CartWidget />
                  </div>
                  <button
                    onClick={() => limpiarProductoCarrito()}
                    className="m-1 px-2 py-2 bg-transparent p-1 hover:bg-red-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded"
                  >
                    Limpiar carrito
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};
