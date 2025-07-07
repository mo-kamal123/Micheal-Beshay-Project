import { Link } from 'react-router-dom';

const sessionData = {
  date: 'Sun 16 July 2023',
  time: '5:00pm',
  bookingRef: '65742695',
  total: '230 EGP',
  client: 'C. Mohamed Khaled',
  feedbackMessage: 'We are waiting for your feedback about the last session',
  feedbackLink: '/rate-session',
};

const LastSession = () => {
  return (
    <div className="bg-white w-full p-6 flex flex-col gap-5 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-[700] text-[#11141A] ">Your reservation</p>
          <p className="text-[14px] text-[#11141A] ">
            {sessionData.date} at {sessionData.time}
          </p>
          <p className="text-[14px] text-[#11141A] ">Booking ref. #: {sessionData.bookingRef}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[16px] font-[700] text-[#11141A] ">Payment</p>
          <p className="text-[14px] text-[#11141A] ">Total: {sessionData.total}</p>
          <p className="text-[14px] text-[#11141A] ">{sessionData.client}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 md:gap-0">
        <p className="font-[600] text-[14px] ">{sessionData.feedbackMessage}</p>
        <Link to={'/rate-sesstion'} className="bg-main w-fit text-white py-3 px-5 rounded-xl ">
          Feedback your Session
        </Link>
      </div>
    </div>
  );
};

export default LastSession;
