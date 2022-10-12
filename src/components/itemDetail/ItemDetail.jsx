import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ItemCount } from '../itemCount/ItemCount';
import db from '../../firebase/firebase';
import 'animate.css';

export const ItemDetail = () => {
  const [itemSeleccionado, setItemSeleccionado] = useState([]);
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const getSelected = async (idItem) => {
    try {
      setLoading(true);
      const document = doc(db, 'ITEMS', idItem);
      const response = await getDoc(document);
      const result = { id: response.id, ...response.data() };
      setLoading(false);
      setItemSeleccionado(result);
    } catch (error) {
      setLoading(true);
      console.error(error);
    }
  };

  useEffect(() => {
    getSelected(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="flex m-40 gap-1 justify-center items-center flex-wrap ">
          <svg
            width="70"
            height="70"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="8.042%"
                y1="0%"
                x2="65.682%"
                y2="23.865%"
                id="a"
              >
                <stop stopColor="#454545" stopOpacity="0" offset="0%" />
                <stop stopColor="#454545" stopOpacity=".631" offset="63.146%" />
                <stop stopColor="#454545" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="translate(1 1)">
                <path
                  d="M36 18c0-9.94-8.06-18-18-18"
                  id="Oval-2"
                  stroke="url(#a)"
                  strokeWidth="2"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite"
                  />
                </path>
                <circle fill="#454545" cx="36" cy="18" r="1">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          </svg>{' '}
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-[300px] max-w-[300px] rounded overflow-hidden shadow-lg m-3 border border-gray-400  animate__animated animate__fadeIn">
            <div>
              <div className="px-4 py-2 text-center">
                <img className="w-full" src={itemSeleccionado.img} />
                <div className="font-bold text-l mb-2">
                  {itemSeleccionado.nombre}
                </div>
                <p className=" text-base">Marca: {itemSeleccionado.marca}</p>
                <p className=" text-base">Stock: {itemSeleccionado.stock}</p>
                <p className=" text-base">Precio: ${itemSeleccionado.precio}</p>
              </div>
            </div>
            <ItemCount item={itemSeleccionado} />
            <div className=" mb-2 flex flex-col items-center">
              <NavLink to="/carrito">
                <button
                  type="button"
                  className="m-1 bg-transparent hover:bg-green-600 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
                >
                  Ir al carrito
                </button>
              </NavLink>
              <NavLink to="/productos">
                <button
                  type="button"
                  className="m-1 bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
                >
                  Volver al catálogo
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
