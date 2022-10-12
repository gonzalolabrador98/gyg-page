import { Dialog, Transition } from '@headlessui/react';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

import db from '../../firebase/firebase';

export default function ModalForm({
  isOpen,
  closeModal,
  openModal,
  closeModalyCarrito,
  total,
  carrito,
}) {
  const [orderId, setOrderId] = useState();
  const [buyer, setBuyer] = useState({
    Nombre: '',
    Email: '',
    Telefono: '',
  });
  const { Nombre, Email, Telefono } = buyer;
  const [showFeedback, setShowFeedback] = useState(false);

  const generateOrder = async (data) => {
    try {
      const col = collection(db, 'ORDERS');
      const order = await addDoc(col, data);
      setOrderId(order.id);
      setShowFeedback(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const actualizarStock = () => {
    carrito.forEach(async (e) => {
      const document = doc(db, 'ITEMS', e.id);
      const nuevoStock = e.stock - e.cantidad;
      await updateDoc(document, {
        stock: nuevoStock,
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = carrito.map((e) => {
      return {
        id: e.id,
        nombre: e.nombre,
        precio: e.precio,
        cantidad: e.cantidad,
        nuevoStock: e.stock - e.cantidad,
      };
    });
    const dia = new Date();
    const data = { buyer, items, dia, total };
    generateOrder(data);
    actualizarStock();
    console.log('data', data);
  };

  return (
    <>
      <div className=" flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="m-5 max-w-[200px] flex self-end bg-transparent hover:bg-green-600 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
        >
          Finalizar compra
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className=" fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {!showFeedback ? (
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h1"
                      className="text-2xl font-medium leading-6 text-gray-900"
                    >
                      Finalizando compra
                    </Dialog.Title>

                    <button onClick={closeModal}>
                      <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-5 mr-5 text-black text-sm z-50">
                        <svg
                          className="fill-current text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 18 18"
                        >
                          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                      </div>
                    </button>

                    <br />
                    <h1 className="text-l mt-3">Completá con tus datos</h1>
                    <form onSubmit={handleSubmit}>
                      <div className="mt-2">
                        <input
                          className="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Nombre"
                          name="Nombre"
                          value={Nombre}
                          onChange={handleInputChange}
                        />
                        <input
                          className="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="mail"
                          placeholder="Email"
                          name="Email"
                          value={Email}
                          onChange={handleInputChange}
                        />
                        <input
                          className="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="tel"
                          placeholder="Teléfono"
                          name="Telefono"
                          value={Telefono}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex justify-end mt-2">
                        <button
                          type="button"
                          onClick={closeModalyCarrito}
                          className="m-2 max-w-[200px] flex self-end bg-transparent hover:bg-red-600 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
                        >
                          Cancelar compra
                        </button>
                        <button
                          type="submit"
                          className="m-2 max-w-[200px] flex self-end bg-transparent hover:bg-green-600 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
                        >
                          Finalizar compra
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                ) : (
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                    <h1 className="text-2xl mt-1 font-bold">
                      Compra realizada con exito!
                    </h1>

                    <h1 className="text-l mt-3">
                      Su ID de orden es: {orderId}
                    </h1>

                    <NavLink to="/productos">
                      <button
                        type="button"
                        onClick={closeModalyCarrito}
                        className="mt-4 max-w-[200px] flex self-end bg-transparent hover:bg-green-600 text-blue-700 font-semibold hover:text-white  py-2 px-2 border border-blue-500 hover:border-transparent rounded"
                      >
                        Volver al catálogo
                      </button>
                    </NavLink>
                  </Dialog.Panel>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
