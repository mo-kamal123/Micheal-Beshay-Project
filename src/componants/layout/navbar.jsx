
import logo from "../../assets/home-imgs/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SubNavbar from "./sub-navbar";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  // const [logedIn, setLogiedIn] = useState(true);
  const [showNoti, setShowNoti] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const logedIn = localStorage.getItem('loggedin') || false

  
  const messages = [
    {
      message:
        "You Session will start tomorrow 29th May at 03:00 PM, Dont miss it.",
      time: "10 h",
    },
    {
      title: "Special offer 🥳",
      message: " 30% for April month ",
      time: "10 h",
    },
    {
      title: "Give us your rate about last session",
      message:
        "You Session will start tomorrow 29th May at 03:00 PM, Dont miss it.",
      time: "10 h",
    },
    {
      message:
        "You Session will start tomorrow 29th May at 03:00 PM, Dont miss it.",
      time: "10 h",
    },
    {
      message:
        "You Session will start tomorrow 29th May at 03:00 PM, Dont miss it.",
      time: "10 h",
    },
    {
      message:
        "You Session will start tomorrow 29th May at 03:00 PM, Dont miss it.",
      time: "10 h",
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
          <img className="w-14 rounded-full" src={logo} alt="logo" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-5 text-[#666C6F]">
        <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-main font-semibold" : "")}
        >
          {t("navbar.home")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? "text-main font-semibold" : "")}
        >
          {t("navbar.about")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/coaches"
          className={({ isActive }) => (isActive ? "text-main font-semibold" : "")}
        >
          {t("navbar.coaches")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => (isActive ? "text-main font-semibold" : "")}
        >
          {t("navbar.contact")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/became-coach"
          className={({ isActive }) => (isActive ? "text-main font-semibold" : "")}
        >
          {t("navbar.becomeCoach")}
        </NavLink>
      </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-5">
        <div
              onMouseEnter={() => setShowNoti(true)}
              onMouseLeave={() => setShowNoti(false)}
              className="relative bg-main rounded-full "
            >
              <IoIosNotifications className="text-4xl bg-main text-white p-1 rounded-full" />
              {showNoti && (
                <div className="absolute w-[300px] p-4 z-50 right-0 top-10 bg-white shadow-2xl text-black flex flex-col gap-5 rounded-2xl">
                  <h1 className=" text-[20px] ">Notification</h1>
                  <p className="absolute right-5" onClick={() => setShowNoti(!showNoti)}>x</p>
                  {messages.map((message, index) => (
                    <div key={index} className="flex justify-between gap-3 py-2">
                      <div className="flex flex-col gap-2">
                        {message.title && <p className=" text-[12px] font-semibold ">{message.title}</p>}
                        <p className="text-[12px]">{message.message}</p>
                      </div>
                      <p className="text-[12px] min-w-7 text-[#A1A1B2]">{message.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-white bg-main rounded-xl p-1">
            ☰
          </button>
        </div>

        {/* Auth or Profile */}
        {!logedIn ? (
          <div className="hidden md:flex gap-2">
            <Link to="/auth/register"  className="bg-dark text-white py-2 px-4 rounded-full">
              Create an account
            </Link>
            <Link to="/auth"  className="bg-main text-white py-2 px-4 rounded-full">
              Log in
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-5">
            <div
              onMouseEnter={() => setShowNoti(true)}
              // onClick={() => setShowNoti(true)}
              onMouseLeave={() => setShowNoti(false)}
              className="relative"
            >
              <IoIosNotifications className="text-4xl bg-main text-white p-1 rounded-full" />
              {showNoti && (
                <div className="absolute w-[300px] p-4 z-50 right-0 top-9 bg-white shadow-2xl text-black flex flex-col gap-5 rounded-2xl">
                  <h1 className=" text-[20px] ">Notification</h1>
                  {messages.map((message, index) => (
                    <div key={index} className="flex justify-between gap-3 py-2">
                      <div className="flex flex-col gap-2">
                        {message.title && <p className=" text-[12px] font-semibold ">{message.title}</p>}
                        <p className="text-[12px]">{message.message}</p>
                      </div>
                      <p className="text-[12px] min-w-7 text-[#A1A1B2]">{message.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link to="/profile" className="flex items-center gap-2">
              <p className="bg-sec w-8 h-8 flex items-center justify-center text-white font-[500] rounded-full">E</p>
              <p className="text-[16px] font-[600]">{t("navbar.profile")}</p>
              <FaArrowRight />
            </Link>
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className=" h-screen fixed top-0 left-0 w-full bg-main  text-white shadow-lg p-4 z-50 md:hidden flex flex-col gap-10">
            <div onClick={() => setMenuOpen(!menuOpen)} className="bg-[#EFEFEF] flex items-center justify-center text-black rounded-full w-8 h-8">
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
                admin@michaelbeshay.com{" "}
              </a>
            </div>
            <div>
            <img className="w-16 rounded-full" src={logo} alt="logo" />
            </div>
            <div className="flex flex-col gap-10">
            <NavLink  to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink  to="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <NavLink  to="/coaches" onClick={() => setMenuOpen(false)}>Coaches</NavLink>
            <NavLink  to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
            <NavLink  to="/became-coach" onClick={() => setMenuOpen(false)}>Become Coach</NavLink>
            </div>

            {!logedIn ? (
              <>
                <Link to="/auth/register" onClick={() => setMenuOpen(false)} className="bg-[#E9EBEF] text-main py-3 px-5 rounded-full w-fit ">
                  Log in
                </Link>
                <Link to="/auth" onClick={() => setMenuOpen(false)} className="bg-dark text-white py-3 px-5 rounded-full w-fit"> 
                Create an account
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-5 bg-[#E9EBEF] w-fit text-black p-5 rounded-4xl">
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                <p className="bg-sec w-8 h-8 flex items-center justify-center text-white font-[500] rounded-full">E</p>
                <p className="text-[16px] font-[600]">{t("navbar.profile")}</p>
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

export default Navbar