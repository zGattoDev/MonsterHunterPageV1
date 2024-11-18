import React, { useEffect, useState } from "react";

export const MonsterList = () => {
  const [monster, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("http://127.0.0.1:5000/api/monster_text")
      const data = await res.json();

      // Filtra los ítems para mostrar solo los que están en español
      const filteredMonster = data.filter(monster => monster.lang_id === 'es');
      setItems(filteredMonster);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Monster List</h1>
      <ul className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {monster.map( monster => (
          <li key={monster.id}>{monster.name}</li>
        )
        )}
      </ul>
    </div>
  )
}
