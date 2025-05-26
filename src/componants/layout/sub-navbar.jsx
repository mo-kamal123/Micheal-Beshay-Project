import { useState } from 'react';
import { TbWorld } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const SubNavbar = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    setIsOpen(false);
  };

  return (
    <nav className="subNav bg-main text-white">
      <div className="w-[90%] h-[50px] m-auto flex items-center justify-between relative">
        {/* Language Dropdown */}
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1">
            <TbWorld />
            {i18n.language === 'ar' ? 'العربية' : 'English'}
            <IoIosArrowDown />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute z-10 bg-white text-black mt-2 p-2 rounded shadow right-0 w-28">
              <li
                className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                onClick={() => changeLanguage('en')}
              >
                English
              </li>
              <li
                className="px-3 py-1 hover:bg-gray-200 cursor-pointer"
                onClick={() => changeLanguage('ar')}
              >
                العربية
              </li>
            </ul>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-5">
          <a className="items-center text-[12px] hidden md:flex" href="#">
            <FiPhone />
            +20 1200104424
          </a>
          <a className="flex items-center text-[12px]" href="#">
            <HiOutlineMail />
            admin@michaelbeshay.com
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
