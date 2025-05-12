import SectionTitle from "../../common/section-title";
import coach_Img from '../../../assets/About-imgs/coach.jpg'
import { ImCoinDollar } from "react-icons/im";
import { MdEventSeat } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const CoachInfo = () => {
    const { pathname } = useLocation(); // Gets current URL path
    const currRoute = pathname;
    console.log(currRoute);
  return (
<div className="bg-main py-10 text-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row md:items-center md:w-[60%] m-auto justify-between gap-6 md:gap-10">
      {/* Image */}
      <div className="w-[120px] h-[120px] md:w-[250px] md:h-[250px] rounded-2xl overflow-hidden mx-auto md:mx-0">
        <img className="w-full h-full object-cover" src={coach_Img} alt="coach-img" />
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-4 w-full">
        {/* Title and Name */}
        <div>
          <SectionTitle className="text-[20px] ml-10 flex items-center justify-between before:bg-white">Coach           <div className="flex gap-2 items-start">
            <FaStar className="text-lg mt-1" />
            <div>
              <p className="text-sm">4.5</p>
              <p className="text-xs text-white/80">Rate</p>
            </div>
          </div></SectionTitle>
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold mt-2">Amand Clar</h1>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-between gap-4 border-t border-white/20 pt-4">
          <div className="flex gap-2 items-start">
            <ImCoinDollar className="text-lg mt-1" />
            <div>
              <p className="text-sm">300 EGP</p>
              <p className="text-xs text-white/80">Per Hour</p>
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <MdEventSeat className="text-lg mt-1" />
            <div>
              <p className="text-sm">33</p>
              <p className="text-xs text-white/80">Total sessions</p>
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <TbMessages className="text-lg mt-1" />
            <div>
              <p className="text-sm">23 feedback</p>
              <p className="text-xs text-white/80">View Feedback</p>
            </div>
          </div>


        </div>

        {/* Button */}
        {currRoute === "/coaches/22" && (
          <div className="pt-4">
            <Link
              to="book-session"
              className="bg-white text-main text-center py-2 px-6 rounded-lg font-bold block w-full "
            >
              Book an appointment
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
</div>

  );
};

export default CoachInfo;
