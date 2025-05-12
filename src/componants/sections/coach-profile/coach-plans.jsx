import icon1 from '../../../assets/coach-imgs/Icon_1.svg'
import icon2 from '../../../assets/coach-imgs/Icon_2.svg' 
import { Link } from "react-router-dom";

const CoachPlan = () => {
  return (
    <div className='w-[90%] m-auto flex flex-col items-center bg-[#F6F8F9]'>
        <div className='text-center mt-20 md:w-[50%]'>
            <h2 className='text-[24px] md:text-[40px] '>Find Your Perfect Plan</h2>
            <p className='text-[#666C6F] text-[14px] mt-2 md:text-base'>Discover the ideal plan to fuel your business growth. Our pricing options are carefully crafted to cater to businesses.</p>
        </div>
        <div className='flex flex-col items-center gap-10 my-10 md:flex-row'>
            <div className='bg-white w-full md:w-[400px] p-6 flex flex-col gap-3 rounded-2xl border border-[#E7EBFF]'>
                <img className='w-16' src={icon1} alt="icon" />
                <h2 className='text-[28px] md:text-[34px] font-[500]'>One Session</h2>
                <p className='text-[12px] md:text-[14px] font-[500] text-[#535353]'>Only pay for one session and book your time.</p>
                <p className='text-[43px] md:text-[50px] font-[500]'>300 <span className='text-[16px] md:text-[25px] text-[#797878] font-light'> EGP </span></p>
                <Link to={'/session/payment'} className='flex justify-center text-main border border-main p-3 rounded-2xl'>Get Started</Link>
            </div>
            <div  className='bg-[#6A8AFF14] md:w-[400px] p-6 flex flex-col gap-3 rounded-2xl border border-[#E7EBFF]'>
                <img className='w-14' src={icon2} alt="icon" />
                <h2 className='text-[28px] md:text-[34px] font-[500]'>4 Session <span>Best offer</span></h2>
                <p className='text-[12px] md:text-[14px] font-[500] text-[#535353]'>Pay for 4 sessions and book your time after every sesseion</p>
                <p className='text-[43px] md:text-[50px] font-[500]'>300 <span className='text-[16px] md:text-[25px] text-[#797878] font-light'> EGP </span></p>
                <Link to={'/session/payment'} className='flex justify-center bg-main text-white p-3 rounded-2xl'>Get Started</Link>
            </div> 
        </div>
    </div>
  )
}

export default CoachPlan