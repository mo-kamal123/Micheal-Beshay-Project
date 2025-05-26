import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const BookingConfirmation = () => {
  return (
    <div className="bg-body h-svh flex justify-center">
      <div className="bg-white md:w-[55%] p-10 m-auto flex flex-col items-center gap-7 rounded-4xl shadow-2xl ">
        <div className=" bg-[#2EC114]  text-white text-xl w-fit px-4 py-2 flex items-center gap-2 rounded-4xl  ">
          <FaCheckCircle />
          Confirmed
        </div>
        <h3 className="text-main text-[18px] font-[500]">
          Thanks a lot for booking session with us.
        </h3>
        <p className="text-[#00000080] text-[14px]">
          Check reservation link on your email mostafa.dimamart@gmail.com has successfully been
          reserved. You’ll find all the details about your reservation in Email, and we’ll send you
          a Email with zoom link recently with link and time you bookedQuestions? Suggestions?
          insightful showe thoughts?
          <span className="text-main"> Shoot us an email.</span>
        </p>
        <Link to={'/'} className="bg-main text-white py-3 w-full flex justify-center rounded-xl">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;
