import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { MHWContext } from '../context/MHWContext';

export const Navigation = () => {

  const context = useContext(MHWContext)
  console.log(context);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-white">
            Pichulino.co
          </div>
          <ul className="hidden md:flex space-x-8 text-lg text-white">
            <li><a href="#monsters" className="hover:text-blue-600">Monsters</a></li>
            <li><a href="#weapons" className="hover:text-blue-600">Weapons</a></li>
            <li><a href="#armor" className="hover:text-blue-600">Armor</a></li>
            <li><a href="#quest" className="hover:text-blue-600">Quest</a></li>
            <li><a href="#builds" className="hover:text-blue-600">Builds</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          </ul>
          <div className="md:hidden">
            {/* Aquí podrías añadir un icono para un menú de hamburguesa en móviles */}
          </div>
        </nav>
      </header>

      {/* Agregar padding-top para compensar la altura del header */}
      <main className="pt-[70px]"> {/* Ajusta el valor de pt según la altura del header */}
        <Outlet />
      </main>
    </>
  );
};
