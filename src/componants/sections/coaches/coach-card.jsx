import coachImg from '../../../assets/About-imgs/coach.jpg';
import { ImCoinDollar } from 'react-icons/im';
import { MdEventSeat } from 'react-icons/md';
import { TbMessages } from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function CoachCard() {
  return (
    <div className="bg-white border-[1px] border-[#E5E5E5] rounded-2xl p-4">
      <div className="flex md:items-center justify-between gap-3 md:gap-10 pb-4 border-b-[1px] border-[#E5E5E5]">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
          <img src={coachImg} alt="coach-img" />
        </div>
        <div className="w-3/4">
          <h2 className="text-main text-[20px] font-bold">Amanda Clara</h2>
          <p className="text-[#727272] text-[14px]">
            A life coach is a professional who helps individuals set and achieve personal or
            professional goals, improve their mindset, and create a more fulfilling life. They
            provide guidance
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between md:ml-32 py-4">
        <div className="flex gap-1 pr-3 border-r border-[#E5E5E5]">
          <div className="text-main mt-[1px] text-lg">
            <ImCoinDollar />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">300 EGP</p>
            <p className="text-xs text-[#7A7D84]">Per Hour</p>
          </div>
        </div>

        <div className="flex gap-1 pr-3 border-r border-[#E5E5E5]">
          <div className="text-main mt-[1px] text-lg">
            <MdEventSeat />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">33</p>
            <p className="text-xs text-[#7A7D84]">Total sessions</p>
          </div>
        </div>

        <div className="flex gap-1 pr-3 border-r border-[#E5E5E5]">
          <div className="text-main mt-[1px] text-lg">
            <TbMessages />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">23 feedback</p>
            <p className="text-xs text-[#7A7D84]">View Feedback</p>
          </div>
        </div>

        <div className="flex gap-1 pr-3">
          <div className="mt-[1px] text-lg text-sec">
            <FaStar />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">4.5 </p>
            <p className="text-xs text-[#7A7D84]">Rate</p>
          </div>
        </div>
      </div>
      <Link to={'22'} className="flex bg-main text-white justify-center w-full py-3 rounded-lg">
        Book an appointment
      </Link>
    </div>
  );
}

export default CoachCard;
