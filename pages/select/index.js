import React from 'react';
import { useRouter } from 'next/router';
import { useCharacter } from '../../context/CharacterContext';

const characters = [
  { id: 'emma', name: 'Emma', image: 'girl.jpg' },
  { id: 'liam', name: 'Liam', image: 'boy.jpg' },
];

export default function Select() {
  const router = useRouter();
  const { setSelectedCharacter } = useCharacter();

  const handleSelect = (character) => {
    setSelectedCharacter(character);
    router.push('/chat');
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center p-6">
      <h1 className="mt-4 mb-8 text-[#FF4D5F] font-bold text-xl">Choose Your Partner</h1>
      <div className="flex flex-col items-center space-y-12 mb-12">
        {characters.map((character) => (
          <div key={character.id} className="relative">
            <img src={character.image} className="w-44 h-44 rounded-xl object-cover shadow-md" alt={`${character.name} AI Partner`} />
            <button
              onClick={() => handleSelect(character)}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-[#FF4D5F] text-sm font-medium py-2 px-8 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 whitespace-nowrap w-40"
            >
              Select {character.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}