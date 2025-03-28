import React, { useState, useEffect, useRef } from "react";

interface Option {
  title?: string;
  description: string;
  imageUrl: string;
  name?: string;
}

interface CustomSelectProps {
  options: Option[];
  optionTitle: string;
  onSelect: (option: Option) => void; // Prop para devolver la opción seleccionada al componente padre
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  optionTitle,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null); // Referencia al contenedor del select

  const handleSelect = (option: Option) => {
    setSelectedOption(option); // Actualiza la opción seleccionada localmente
    onSelect(option); // Devuelve la opción seleccionada al componente padre
    setIsOpen(false); // Cierra el menú desplegable
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false); // Cierra el menú si se hace clic fuera del contenedor
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className="relative w-full sm:w-64">
      <div
        className="flex items-center border border-gray-300 rounded-md p-2 cursor-pointer bg-gray-100 hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <div className="flex items-center w-full">
            <img
              src={selectedOption.imageUrl}
              alt={selectedOption?.title ?? selectedOption?.name}
              className="w-8 h-8 mr-4 border border-gray-300 rounded"
            />
            <span className="text-sm sm:text-base font-medium">
              {selectedOption?.title ?? selectedOption?.name}
            </span>
          </div>
        ) : (
          <span className="text-black text-sm sm:text-base font-medium">
            {optionTitle}...
          </span>
        )}
      </div>
      {isOpen && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full sm:w-64 max-h-60 overflow-y-auto shadow-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              <img
                src={option.imageUrl}
                alt={option.title ?? option.name}
                className="w-8 h-8 mr-4 border border-gray-300 rounded"
              />
              <span className="text-sm sm:text-base font-medium">
                {option.title ?? option.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
