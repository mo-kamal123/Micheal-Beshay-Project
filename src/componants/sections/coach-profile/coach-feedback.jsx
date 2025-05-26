import { AiOutlineSignature } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CoachFeedback = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-main">Feed-back</p>
      <h2 className="text-[40px] font-bold">Coach feedback</h2>
      <div className="bg-main text-white w-[90%] md:w-[70%] my-10 p-8 flex flex-col gap-5 rounded-4xl ">
        <p className="text-6xl">
          <AiOutlineSignature />
        </p>
        <p className="text-[20px]">
          We have been operating for over an providin top-notch services to our clients and build
          strong track record in the industry.We have been operating for over a decad providi ina
          top-notch We have been operating
        </p>
        <div className="mt-2">
          <p className="text-[22px] font-bold">Client name</p>
          <p className="text-[18px] ">22 Aug 2023</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white w-[70%] h-[1px]"></div>
          <div className="flex gap-4">
            <button className="bg-white rounded-full p-4 text-main">
              <FaArrowLeft />
            </button>
            <button className="bg-white rounded-full p-4 text-main">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachFeedback;
