import React, { useState } from "react";

interface Option {
  title: string;
  description: string;
  imageUrl: string;
}

interface CustomSelectProps {
  options: Option[];
  onSelect: (option: Option) => void; // Prop para devolver la opción seleccionada al componente padre
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    setSelectedOption(option); // Actualiza la opción seleccionada localmente
    onSelect(option); // Devuelve la opción seleccionada al componente padre
    setIsOpen(false); // Cierra el menú desplegable
  };

  return (
    <div className="relative w-full sm:w-64">
      <div
        className="flex items-center border border-gray-300 rounded-md p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <>
            <img
              src={selectedOption.imageUrl}
              alt={selectedOption.title}
              className="w-6 h-6 mr-2"
            />
            <span className="text-sm sm:text-base">{selectedOption.title}</span>
          </>
        ) : (
          <span className="text-gray-500 text-sm sm:text-base">
            Select an option...
          </span>
        )}
      </div>
      {isOpen && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full sm:w-64 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              <img
                src={option.imageUrl}
                alt={option.title}
                className="w-6 h-6 mr-2"
              />
              <span className="text-sm sm:text-base">{option.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
