import logo from "../../../assets/home-imgs/logo.png";
import free_1 from "../../../assets/home-imgs/free_1.png";
import free_2 from "../../../assets/home-imgs/free_2.png";
import classess from "./hero.module.css";
import { IoCheckmark } from "react-icons/io5";
import SectionTitle from "../../common/section-title";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";

const FreeSession = ({ getSession }) => {
  const { t } = useTranslation();
  const questions = t('freeSession.questions', { returnObjects: true });

  return (
    <div className="w-[95%] md:w-[80%] m-auto my-20 flex items-center flex-wrap md:flex-nowrap gap-16">
      <div className="w-[40%] flex flex-col items-center gap-10 md:w-1/4">
        <div className={`relative ${classess.border_line}`}>
          <div
            className={`w-[150px] h-[250px] relative overflow-hidden rounded-[20px] md:w-[200px] md:h-[300px]`}
          >
            <img
              className="w-full h-full object-cover"
              src={free_1}
              alt="coach img"
            />
          </div>
        </div>

        <div>
          <img className="w-[190px] rounded-full" src={logo} alt="logo" />
        </div>
      </div>
      <div className="w-[30%] flex flex-col items-center gap-10 md:w-1/4">
        <div className="bg-main text-white px-6 py-4 flex items-center gap-3 rounded-3xl">
          <p className="text-[35px] font-[600] md:text-[50px]">120+</p>{" "}
          <span className="text-[14px] md:text-[20px]">satisfied Clients</span>
        </div>
        <div className="w-[200px] h-[300px] overflow-hidden rounded-[20px] md:w-[250px] md:h-[350px] ">
          <img
            className="w-full h-full object-cover"
            src={free_2}
            alt="coach img"
          />
        </div>
      </div>
      {!getSession && <div className="w-full flex flex-col gap-10 md:w-1/2">
        <SectionTitle
          className= 'text-main text-[20px] ml-12 md:ml-10 before:bg-main'
        >
          {t('freeSession.title')}
        </SectionTitle>
        <Link to='free-session' className="bg-main text-white text-[20px] w-fit px-8 py-3 rounded-full md:text-[25px]">
          {t('freeSession.button')}
        </Link>
        <div className="flex flex-col gap-5">
        {questions.map((question, index) => (
          <p key={index} className="text-[#2A4A45] text-[16px] flex items-center gap-2 md:text-[22px]">
            <IoCheckmark /> {question}
          </p>
        ))}
        </div>
      </div>}
      {getSession && (
        <div className="mx-2 flex flex-col gap-5 md:mx-10">
          <h1 className=" font-[700] text-[30px] ">Get free session</h1>
          <p className=" text-[#666C6F] ">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
          <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <label className="text-[#666C6F]" htmlFor="name">Email*</label>
            <input required className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]" type="text" name="name" id="name" placeholder="Enter your Email"/>
        </div>
        <div className="flex flex-col gap-3">
        <label className="block text-gray-700 mb-2">Phone number*</label>
        <PhoneInput
          country={"eg"} 
          // value={'00000'}
          inputStyle={{
            width: "100%",
            borderRadius: "30px",
            border: "1px solid #001f5e",
            padding: '0 60px',
        }}
        buttonStyle={{
                border: "1px solid #001f5e",
                borderRadius: "30px ",
                padding: '6px',
          }}
        />
      </div>
        <button className="bg-main text-white py-3 rounded-4xl">Get a session</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreeSession;
