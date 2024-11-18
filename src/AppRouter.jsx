import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { ItemListPage } from "./components/ItemListPage"; 
import { MonsterList } from "./components/Monsters";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Agrega la nueva ruta */}
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="/items" element={<ItemListPage />} /> 
        <Route path="/monsters" element={<MonsterList />} /> 
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
