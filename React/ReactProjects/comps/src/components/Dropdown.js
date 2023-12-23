import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (evt) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(evt.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    // Cleanup
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Technically the correct way to write the above function:
  // const handleClick = (currentIsOpen) => {
  // setIsOpen((currentIsOpen) => !currentIsOpen)
  // }

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div
      ref={divEl}
      className='w48 relative'
    >
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
