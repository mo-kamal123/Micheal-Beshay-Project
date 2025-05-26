import CoachInfo from '../coach-profile/coach-info';

function RateSesstion() {
  return (
    <div className=" bg-body">
      <CoachInfo />
      <div className="w-[95%] md:w-[70%] m-auto py-20 flex flex-col gap-5 ">
        <h1 className="text-[24px] md:text-[40px] font-[500] ">Rate your session</h1>
        <div className=" flex flex-col gap-3">
          <h3 className="font-[700] ">Your reservation</h3>
          <p>Sun 16 July 2023 at 5:00pm</p>
        </div>
        <div>
          <p className="text-[#666C6F] mb-2">What is your feeling about the session? </p>
          <input
            required
            className="w-full py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <p className="text-[#666C6F] mb-2">Leave your feedback*</p>
          <textarea
            required
            className="w-full py-3 px-6 h-[150px] border border-main bg-white rounded-3xl font-light text-[14px] placeholder-[#ACACAC]"
            type="text"
            name="name"
            id="name"
            placeholder="leave your message"
          />
        </div>
        <button className="bg-main text-white py-3 rounded-4xl">SEND</button>
      </div>
    </div>
  );
}

export default RateSesstion;
