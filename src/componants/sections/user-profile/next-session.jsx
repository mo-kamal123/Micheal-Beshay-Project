import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

const sessionData = {
  status: 'Confirmed',
  statusColor: '#2EC114',
  date: 'Sun 16 July 2023',
  time: '5:00pm',
  bookingRef: '65742695',
  total: '230 EGP',
  client: 'C. Mohamed Khaled',
  sessionLink: 'https://www.zoom.com/',
  cancelPolicy:
    'Cancel for free anytime in advance, otherwise you will be charged 100% of the service price for not showing up.',
};

const NextSession = () => {
  return (
    <div>
      <div className="bg-white p-6 flex flex-col gap-5 rounded-2xl">
        {/* Status */}
        <div
          className="text-white w-fit px-2 py-1 flex items-center gap-2 rounded-4xl"
          style={{ backgroundColor: sessionData.statusColor }}
        >
          <FaCheckCircle />
          {sessionData.status}
        </div>

        {/* Reservation and Payment */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[16px] font-[700] text-[#11141A] ">Your reservation</p>
            <p className="text-[14px] text-[#11141A] ">
              {sessionData.date} at {sessionData.time}
            </p>
            <p className="text-[14px] text-[#11141A] ">Booking ref. #: {sessionData.bookingRef}</p>
          </div>
          <div>
            <p className="text-[16px] font-[700] text-[#11141A] ">Payment</p>
            <p className="text-[14px] text-[#11141A] ">Total: {sessionData.total}</p>
            <p className="text-[14px] text-[#11141A] ">{sessionData.client}</p>
          </div>
        </div>

        {/* Session Link */}
        <div className="pl-5 pb-6 border-b border-[#D3D3D3]">
          <p className="text-[16px] font-[700] text-[#11141A] ">Link of session</p>
          <a
            className="text-blue-600"
            href={sessionData.sessionLink}
            target="_blank"
            rel="noreferrer"
          >
            {sessionData.sessionLink}
          </a>
        </div>

        {/* Cancellation */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[16px] font-[700] text-[#11141A] mb-4 ">Cancellation policy</p>
            <p className="w-[80%]">{sessionData.cancelPolicy}</p>
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
