import { Link } from 'react-router-dom';

const LastSession = () => {
  return (
    <div className="bg-white w-full p-6 flex flex-col gap-5 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-[700] text-[#11141A] ">Your reservation</p>
          <p className="text-[14px] text-[#11141A] ">Sun 16 July 2023 at 5:00pm</p>
          <p className="text-[14px] text-[#11141A] ">Booking ref. #: 65742695</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-[700] text-[#11141A] ">Payment</p>
          <p className="text-[14px] text-[#11141A] ">Total: 230 EGP</p>
          <p className="text-[14px] text-[#11141A] ">C. Mohamed Khaled</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 md:gap-0">
        <p className="font-[600] text-[14px] ">We waiting your feedback about last session</p>
        <Link to={'/rate-sesstion'} className="bg-main w-fit text-white py-3 px-5 rounded-xl ">
          Feedback your Session
        </Link>
      </div>
    </div>
  );
};

export default LastSession;
