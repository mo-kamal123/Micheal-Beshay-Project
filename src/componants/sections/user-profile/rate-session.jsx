import { useState } from 'react';
import CoachInfo from '../coach-profile/coach-info';
import { useUserMutationQuery } from '../../../hooks/user-hooks/useUserMutationQuery';

function RateSesstion() {
  const [feedback, setFeedback] = useState({ opinion: '', message: '' }); // Initial state for feedback
  const { mutate, isError, isPending, isSuccess } = useUserMutationQuery(); // Hook to handle user mutations (e.g., sending feedback)
  /**
   * Handles input changes and updates the feedback state.
   * @param {string} key - The field name to update (e.g., 'opinion', 'message').
   * @param {Event} e - The event object from input change.
   **/
  const handleChange = (key, e) => {
    const value = e.target.value;
    setFeedback(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault(); 
    mutate(feedback) ; // Call the mutation function with the feedback data
  }
  
  return (
    <div className=" bg-body">
      <CoachInfo />
      <form onSubmit={ e => handleSubmit(e)} className="w-[95%] md:w-[70%] m-auto py-20 flex flex-col gap-5 ">
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
            onChange={e => handleChange('opinion', e)}
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
            onChange={e => handleChange('message', e)}
          />
        </div>
        <button className="bg-main text-white py-3 rounded-4xl">SEND</button>
      </form>
    </div>
  );
}

export default RateSesstion;
