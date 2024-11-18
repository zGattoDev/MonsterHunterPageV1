import React from 'react';
import bannerImage from '../assets/monster-hunter-world-iceborne-banner.avif';
import monsterImage from '../assets/monsters.jpg';
import weaponsImage from '../assets/weapons.jpg';
import armorImage from '../assets/armor.jpg';
import questImage from '../assets/quest.jpg';
import buildsImage from '../assets/builds.jpg';
import skillsImage from '../assets/skills.jpg';

export const HomePage = () => {
  const categories = [
    { title: 'Monsters', image: monsterImage },
    { title: 'Weapons', image: weaponsImage },
    { title: 'Armor', image: armorImage },
    { title: 'Quest', image: questImage },
    { title: 'Builds', image: buildsImage },
    { title: 'Skills', image: skillsImage },
  ];

  return (
    <>
      {/* Banner principal*/}
      <div className="relative w-full h-[1300px] sm:h-[400px] lg:h-[300px] overflow-hidden">
          <img
            src={bannerImage}
            alt="Header Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">Monster Hunter World Guias</h1>
          </div>
        </div>

      {/* Grid de categorías */}
      <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg border-4 border-blue-500 hover:border-red-500 transition-colors duration-300"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">{category.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
