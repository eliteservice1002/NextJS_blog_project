import React, { useRef, useState, useEffect } from "react";
import { Label } from "./Wrappers.styles";
import { IconOpen } from "./Icons";

export default function SelectCustom({
  value,
  label,
  options,
  onChange,
  time,
  firstText,
  first,
}: {
  value?: string;
  label: string;
  options: any;
  onChange: (e) => void;
  time?: boolean;
  firstText: string;
  first?: boolean;
}) {
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    for (let option of options) {
      if (option.props.value === value) {
        setSelectedOption(option);
      }
    }
  }, [value]);

  useEffect(() => {
    if (first) {
      setSelectedOption(options[0]);
    }
  }, [first && options.length != 0]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div>
      <Label>{label}</Label>
      <div className={`relative ${!time && "mt-2"} `}>
        <button
          onClick={toggling}
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          className={`relative text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-primary bg-transparent text-brownDark font-hthaptik w-full pt-6 pb-2 pl-1 text-base font-light ${
            !time && " border-darkLight border rounded border-solid"
          } `}
        >
          <span className="flex items-center pl-1">
            <span
              className={`block truncate text-darkbrown ${
                !selectedOption && "text-opacity-7"
              }`}
            >
              {selectedOption?.props?.children.length === 2
                ? selectedOption?.props?.children[0].props.children
                : selectedOption?.props?.children || firstText}
            </span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <IconOpen />
          </span>
        </button>
        {isOpen && (
          <div
            className="absolute mt-1 w-full rounded bg-prevention20-lightGreySelect shadow-lg"
            style={{ zIndex: 100 }}
          >
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="max-h-240px rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm shadow-md"
              ref={wrapperRef}
            >
              {options.map((option, i) => (
                <li
                  key={Math.random()}
                  onClick={onOptionClicked(option)}
                  id="listbox-item-0"
                  role="option"
                  className="select-none relative"
                >
                  <div className="flex  items-center  hover:bg-prevention20-lightGreySelectHover cursor-pointer ">
                    <span
                      className={`text-brownDark px-4 py-4 font-hthaptik font-light text-base mx-1 block truncate`}
                    >
                      {option.props.children.length === 2 ? (
                        <div>
                          {option.props.children[0].props.children}
                          {option.props.children[1]}
                        </div>
                      ) : (
                        option.props.children
                      )}
                    </span>
                  </div>
                  <div className="px-4">
                    <hr />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
