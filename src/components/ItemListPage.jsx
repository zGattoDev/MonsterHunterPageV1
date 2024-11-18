// src/components/ItemListPage.jsx
import React, { useEffect, useState } from "react";

export const ItemListPage = () => {
  const [items, setItems] = useState([]);
  const [itemDetails, setItemDetails] = useState({}); // Para almacenar los detalles de los ítems

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("http://127.0.0.1:5000/api/item_text");
      const data = await res.json();

      // Filtra los ítems para mostrar solo los que están en español
      const filteredItems = data.filter(item => item.lang_id === 'es');
      setItems(filteredItems);
    };

    const fetchItemDetails = async () => {
      const res = await fetch("http://127.0.0.1:5000/api/item");
      const data = await res.json();
      const itemDetailsMap = {};
      
      // Mapa de detalles de ítems por ID
      data.forEach(item => {
        itemDetailsMap[item.id] = item; // Usa el id como clave
      });
      
      setItemDetails(itemDetailsMap);
    };

    fetchItems();
    fetchItemDetails();
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      <ul className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => {
          const details = itemDetails[item.id] || {}; // Obtener detalles del ítem
          const imageName = `ic_items_${details.icon_name}_${details.icon_color}.svg`; // Formar el nombre de la imagen
          const imageUrl = `http://127.0.0.1:5000/images/items/${imageName}`; // URL de la imagen

          return (
            <li key={item.id} className="flex items-center">
              <img 
                src={imageUrl} 
                alt={item.name} 
                className="w-8 h-8 mr-2" // Tamaño de la imagen y margen a la derecha
              />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
