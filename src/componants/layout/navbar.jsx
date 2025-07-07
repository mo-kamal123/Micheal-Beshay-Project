import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { IoIosNotifications } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../../assets/home-imgs/logo.png';
import SubNavbar from './sub-navbar';

const Navbar = () => {
  const [showNoti, setShowNoti] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  // Get loggedIn state from Redux store
  const loggedIn = useSelector(state => state.auth.loggedIn);

  // Define navigation links
  const links = [
    { title: 'navbar.home', path: '/' },
    { title: 'navbar.about', path: '/about-us' },
    { title: 'navbar.coaches', path: '/coaches' },
    { title: 'navbar.contact', path: '/contact-us' },
    { title: 'navbar.becomeCoach', path: '/became-coach' },
  ];

  // Sample messages for notifications
  const messages = [
    {
      message: 'You Session will start tomorrow 29th May at 03:00 PM, Dont miss it.',
      time: '10 h',
    },
    {
      title: 'Special offer 🥳',
      message: ' 30% for April month ',
      time: '10 h',
    },
    {
      title: 'Give us your rate about last session',
      message: 'You Session will start tomorrow 29th May at 03:00 PM, Dont miss it.',
      time: '10 h',
    },
    {
      message: 'You Session will start tomorrow 29th May at 03:00 PM, Dont miss it.',
      time: '10 h',
    },
    {
      message: 'You Session will start tomorrow 29th May at 03:00 PM, Dont miss it.',
      time: '10 h',
    },
    {
      message: 'You Session will start tomorrow 29th May at 03:00 PM, Dont miss it.',
      time: '10 h',
    },
  ];

  return (
    <nav className="bg-body">
      {/* SubNavbar Desktop only */}
      <div className={`${menuOpen ? 'hidden' : 'block'}`}>
        <SubNavbar />
      </div>

      {/* Main Navbar */}
      <div className="md:w-[90%] m-auto h-[80px] flex justify-between items-center relative px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img className="w-14 rounded-full" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-5 text-[#666C6F]">
          {links.map((link, index) => (
            // Map through links and create NavLink for each in larger screens
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${isActive ? 'text-main font-semibold' : ''} hover:text-main`
                }
              >
                {t(link.title)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-5">
          <div
            onMouseEnter={() => setShowNoti(true)}
            onMouseLeave={() => setShowNoti(false)}
            className="relative bg-main rounded-full "
          >
            <IoIosNotifications className="text-4xl bg-main text-white p-1 rounded-full" />
            {/* Notification Popup */}
            {showNoti && (
              <div className="absolute w-[300px] p-4 z-50 right-0 top-10 bg-white shadow-2xl text-black flex flex-col gap-5 rounded-2xl">
                <h1 className=" text-[20px] ">Notification</h1>
                <p className="absolute right-5" onClick={() => setShowNoti(!showNoti)}>
                  x
                </p>
                {/* Display messages */}
                {messages.map((message, index) => (
                  <div key={index} className="flex justify-between gap-3 py-2">
                    <div className="flex flex-col gap-2">
                      {message.title && (
                        <p className=" text-[12px] font-semibold ">{message.title}</p>
                      )}
                      <p className="text-[12px]">{message.message}</p>
                    </div>
                    <p className="text-[12px] min-w-7 text-[#A1A1B2]">{message.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white bg-main rounded-xl p-1"
          >
            ☰
          </button>
        </div>

        {/* Auth or Profile */}
        {!loggedIn ? (
          // Authentication Links
          <div className="hidden md:flex gap-2">
            <Link to="/auth/register" className="bg-dark text-white py-2 px-4 rounded-full">
              Create an account
            </Link>
            <Link to="/auth" className="bg-main text-white py-2 px-4 rounded-full">
              Log in
            </Link>
          </div>
        ) : (
          // Profile Link with Notifications
          <div className="hidden md:flex items-center gap-5">
            <div
              onMouseEnter={() => setShowNoti(true)}
              // onClick={() => setShowNoti(true)}
              onMouseLeave={() => setShowNoti(false)}
              className="relative"
            >
              <IoIosNotifications className="text-4xl bg-main text-white p-1 rounded-full" />
              {/* Notification Popup */}
              {showNoti && (
                <div className="absolute w-[300px] p-4 z-50 right-0 top-9 bg-white shadow-2xl text-black flex flex-col gap-5 rounded-2xl">
                  <h1 className=" text-[20px] ">Notification</h1>
                  {/* Display messages */}
                  {messages.map((message, index) => (
                    <div key={index} className="flex justify-between gap-3 py-2">
                      <div className="flex flex-col gap-2">
                        {message.title && (
                          <p className=" text-[12px] font-semibold ">{message.title}</p>
                        )}
                        <p className="text-[12px]">{message.message}</p>
                      </div>
                      <p className="text-[12px] min-w-7 text-[#A1A1B2]">{message.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/profile" className="flex items-center gap-2">
              <p className="bg-sec w-8 h-8 flex items-center justify-center text-white font-[500] rounded-full">
                E
              </p>
              <p className="text-[16px] font-[600]">{t('navbar.profile')}</p>
              <FaArrowRight />
            </Link>
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className=" h-screen fixed top-0 left-0 w-full bg-main  text-white shadow-lg p-4 z-50 md:hidden flex flex-col gap-10">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-[#EFEFEF] flex items-center justify-center text-black rounded-full w-8 h-8"
            >
              <FaArrowLeft />
            </div>
            <div className="flex items-center justify-between gap-5">
              <a className="text-[12px] flex items-center gap-3" href="#">
                <FiPhone />
                +20 1200104424
              </a>
              <p>|</p>
              <a className="text-[12px] flex items-center gap-3" href="#">
                <HiOutlineMail />
                admin@michaelbeshay.com{' '}
              </a>
            </div>
            <div>
              <img className="w-16 rounded-full" src={logo} alt="logo" />
            </div>
            <div className="flex flex-col gap-10">
              {links.map((link, index) => (
                // Map through links and create NavLink for each in mobile menu
                <NavLink key={index} to={link.path} onClick={() => setMenuOpen(false)}>
                  {t(link.title)}
                </NavLink>
              ))}
            </div>

            {/* Authentication or Profile Links in Mobile Menu */}
            {!loggedIn ? (
              // Authentication Links
              <>
                <Link
                  to="/auth/register"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#E9EBEF] text-main py-3 px-5 rounded-full w-fit "
                >
                  Log in
                </Link>
                <Link
                  to="/auth"
                  onClick={() => setMenuOpen(false)}
                  className="bg-dark text-white py-3 px-5 rounded-full w-fit"
                >
                  Create an account
                </Link>
              </>
            ) : (
              // Profile Link
              <div className="flex items-center gap-5 bg-[#E9EBEF] w-fit text-black p-5 rounded-4xl">
                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <p className="bg-sec w-8 h-8 flex items-center justify-center text-white font-[500] rounded-full">
                    E
                  </p>
                  <p className="text-[16px] font-[600]">{t('navbar.profile')}</p>
                  <FaArrowRight />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
