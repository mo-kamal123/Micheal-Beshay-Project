import { useTranslation } from "react-i18next";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiOutlineSignature } from "react-icons/ai";
import NumbersCard from "./number-card";
import SectionTitle from "../../common/section-title";

function Clients() {
  const { t } = useTranslation();
  const testimonial = t("trust.testimonial", { returnObjects: true });

  return (
    <div className="flex flex-col gap-10 w-[90%] m-auto my-20 md:w-[80%] md:flex-row">
      <div>
        <SectionTitle
          className="text-main text-[16px] ml-10 before:bg-[#5A717C] md:text-[20px]"
        >
          {t("trust.title")}
        </SectionTitle>
        <h1 className="text-[24px] font-bold mt-3 md:text-[50px]">
          {t("trust.heading")}
        </h1>
      </div>

      <div className="bg-main text-white w-[95%] m-auto p-8 flex flex-col gap-5 rounded-4xl md:w-[80%]">
        <p className="text-6xl">
          <AiOutlineSignature />
        </p>
        <p className="text-[15px] leading-6 md:text-[20px]">
          {testimonial.text}
        </p>
        <div className="mt-2">
          <p className="text-[20px] font-bold md:text-[22px]">{testimonial.author}</p>
          <p className="text-[18px]">{testimonial.date}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="bg-white w-[30%] h-[1px] md:w-[70%]"></div>
          <div className="flex gap-4">
            <button className="bg-white rounded-full p-2 text-main md:p-4">
              <FaArrowLeft />
            </button>
            <button className="bg-white rounded-full p-2 text-main md:p-4">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
