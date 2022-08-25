import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';

export const CartWidget = () => {
  return (
    <div className="hidden lg:ml-4 lg:flex lg:items-center">
      <button
        type="button"
        className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
