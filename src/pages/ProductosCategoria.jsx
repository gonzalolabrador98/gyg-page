import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { FiltroCategoria } from '../components/flitroCategoria/FiltroCategoria';
import db from '../firebase/firebase';

export const ProductosCategoria = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const getSelected = async (category) => {
    try {
      setLoading(true);
      const document = query(
        collection(db, 'ITEMS'),
        where('categoria', '==', category)
      );
      const col = await getDocs(document);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setLoading(false);
      setProductos(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSelected(id);
  }, [id]);

  return (
    <>
      <FiltroCategoria />
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
                <stop stopColor="#717171" stopOpacity="0" offset="0%" />
                <stop stopColor="#717171" stopOpacity=".631" offset="63.146%" />
                <stop stopColor="#717171" offset="100%" />
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
                <circle fill="#717171" cx="36" cy="18" r="1">
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
        <div className="flex gap-1 justify-center flex-wrap">
          {productos.map((item, idx) => (
            <div
              key={idx}
              className="w-[300px] max-w-[300px]  rounded overflow-hidden shadow-lg m-2 border border-gray-400"
            >
              <img className="w-full" src="" alt="" />
              <div className=" px-6 py-4 text-center">
                <img className="w-full" src={item.img} />
                <div className="font-bold text-l mb-2">{item.nombre}</div>
                <p className=" text-base">Marca: {item.marca}</p>
                <p className=" text-base">Stock: {item.stock}</p>
                <p className=" text-base">Precio: ${item.precio}</p>
              </div>
              <div className="flex justify-center m-2">
                <NavLink to={`/item/${item.id}`}>
                  <button className="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
                    Detalles del producto
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
