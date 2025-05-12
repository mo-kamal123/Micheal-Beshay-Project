import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FilterOptions = ({ type, options }) => {
    const [isOpened, setIsOpened] = useState(false);
    const [selected, setSelected] = useState('');

    return (
        <div 
            className="w-full relative"
            onMouseEnter={() => setIsOpened(true)}
            onMouseLeave={() => setIsOpened(false)}
        >
            <div className="bg-white p-4 flex justify-between items-center rounded-4xl cursor-pointer">
                <p>Filter by: {type}</p>
                <IoIosArrowDown className={`transition-transform duration-200 ${isOpened ? 'rotate-180' : ''}`} />
            </div>
            
            {isOpened && (
                <div className="rounded-2xl absolute w-full top-full left-0 bg-white overflow-hidden shadow-lg z-10 mt-1">
                    {options.map((option, index) => (
                        <p 
                            key={index}
                            className={`p-4 hover:bg-main hover:text-white ${selected === option ? 'bg-main text-white' : ''} cursor-pointer transition-colors duration-200`}
                            onClick={() => setSelected(option)}
                        >
                            {option}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterOptions;