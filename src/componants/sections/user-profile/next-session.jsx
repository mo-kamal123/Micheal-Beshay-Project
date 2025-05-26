import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const NextSession = () => {
  return (
    <div>
      <div className="bg-white p-6 flex flex-col gap-5 rounded-2xl">
        <div className=" bg-[#2EC114]  text-white w-fit px-2 py-1 flex items-center gap-2 rounded-4xl  ">
          <FaCheckCircle />
          Confirmed
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[16px] font-[700] text-[#11141A] ">Your reservation</p>
            <p className="text-[14px] text-[#11141A] ">Sun 16 July 2023 at 5:00pm</p>
            <p className="text-[14px] text-[#11141A] ">Booking ref. #: 65742695</p>
          </div>
          <div>
            <p className="text-[16px] font-[700] text-[#11141A] ">Payment</p>
            <p className="text-[14px] text-[#11141A] ">Total: 230 EGP</p>
            <p className="text-[14px] text-[#11141A] ">C. Mohamed Khaled</p>
          </div>
        </div>
        <div className="pl-5 pb-6 border-b border-[#D3D3D3]">
          <p className="text-[16px] font-[700] text-[#11141A] ">Link of session</p>
          <a className="text-blue-600" href="#">
            https://www.zoom.com/
          </a>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[16px] font-[700] text-[#11141A] mb-4 ">Cancellation policy</p>
            <p className="w-[80%]">
              Cancel for free anytime in advance, otherwise you will be charged 100% of the service
              price for not showing up.
            </p>
          </div>
          <button className="bg-[#FFF0F0] p-3 flex items-center gap-1 rounded-2xl">
            <p className="text-red-500 text-lg">
              <MdCancel />
            </p>
            Refund
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextSession;
