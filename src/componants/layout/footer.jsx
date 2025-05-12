import { NavLink } from 'react-router-dom';
import logo from '../../assets/home-imgs/logo.png';
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next'; 

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-main text-[#E7ECEE] pt-5'>
      <div className="w-[90%] m-auto border-b border-[#647B86] flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0 py-5">
        <div className="">
          <img className="w-14 rounded-full" src={logo} alt="logo" />
        </div>
        <ul className="flex flex-wrap justify-between md:justify-center text-sm md:text-base">
          <div className='md:flex gap-4 mr-4'>
            <li className='mt-3 md:mt-0'>
              <NavLink 
                to='/' 
                className={({ isActive }) => 
                  isActive ? 'text-[#FFD700] underline' : 'text-[#E7ECEE] hover:text-[#FFD700] transition-all'
                }
              >
                {t('footer.home')}
              </NavLink>
            </li>
            <li className='mt-3 md:mt-0'>
              <NavLink 
                to='/about-us' 
                className={({ isActive }) => 
                  isActive ? 'text-[#FFD700] underline' : 'text-[#E7ECEE] hover:text-[#FFD700] transition-all'
                }
              >
                {t('footer.about')}
              </NavLink>
            </li>
            <li className='mt-3 md:mt-0'>
              <NavLink 
                to='/coaches' 
                className={({ isActive }) => 
                  isActive ? 'text-[#FFD700] underline' : 'text-[#E7ECEE] hover:text-[#FFD700] transition-all'
                }
              >
                {t('footer.coaches')}
              </NavLink>
            </li>
          </div>
          <div className='md:flex gap-4'>
            <li className='mt-3 md:mt-0'>
              <NavLink 
                to='/contact-us' 
                className={({ isActive }) => 
                  isActive ? 'text-[#FFD700] underline' : 'text-[#E7ECEE] hover:text-[#FFD700] transition-all'
                }
              >
                {t('footer.contact')}
              </NavLink>
            </li>
            <li className='mt-3 md:mt-0'>
              <NavLink 
                to='/became-coach' 
                className={({ isActive }) => 
                  isActive ? 'text-[#FFD700] underline' : 'text-[#E7ECEE] hover:text-[#FFD700] transition-all'
                }
              >
                {t('footer.becomeCoach')}
              </NavLink>
            </li>
          </div>
        </ul>
        <div className="flex gap-2">
          <button className="bg-white text-[#5A717C] p-3 rounded-4xl text-xl">
            <FaTwitter />
          </button>
          <button className="bg-white text-[#5A717C] p-3 rounded-4xl text-xl">
            <FaYoutube />
          </button>
          <button className="bg-white text-[#5A717C] p-3 rounded-4xl text-xl">
            <FaInstagram />
          </button>
        </div>
      </div>

      <div className='w-[90%] m-auto py-6 flex flex-col md:flex-row justify-between items-center text-center text-sm gap-3 md:gap-0'>
        <p>© 2023 Happy Life Club | Design by Michale Beshay</p>
        <p className="underline cursor-pointer">Terms of Use | Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
