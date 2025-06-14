import { useEffect, useRef, useState } from 'react';

/**
 * The Verify component handles the verification process by allowing users to input a 6-digit code.
 * It includes a countdown timer and input field navigation for a seamless user experience.
 */
const Verify = () => {
  const [code, setCode] = useState(new Array(6).fill('')); // State to store the 6-digit code
  const [timer, setTimer] = useState(59); // Countdown timer state
  const inputsRef = useRef([]); // Ref to manage focus on input fields

  /**
   * useEffect hook to start a countdown timer.
   * The timer decreases every 500ms until it reaches 0.
   */
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 500);
    return () => clearInterval(countdown); // Cleanup the interval on component unmount
  }, []);

  /**
   * Handles changes in the input fields.
   *
   * @param {string} value - The value entered in the input field.
   * @param {number} index - The index of the input field being updated.
   * Ensures only digits are entered, updates the code state, and moves focus to the next input field.
   */
  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus(); // Move focus to the next input field
    }
  };

  /**
   * Handles keydown events for the input fields.
   *
   * @param {Object} e - The keyboard event object.
   * @param {number} index - The index of the input field where the event occurred.
   * Moves focus to the previous input field when Backspace is pressed and the current field is empty.
   */
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus(); // Move focus to the previous input field
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">Verify Code</h2>
      <p className="text-[#666C6F] text-[13px] text-center flex items-center gap-1">
        We send code on your email
        <span className="font-medium  text-black underline">mostafa.dimamart@gmail.com</span>
      </p>

      <div className="flex gap-2">
        {code.map((num, idx) => (
          <input
            key={idx}
            ref={el => (inputsRef.current[idx] = el)}
            type="text"
            maxLength={1}
            value={num}
            onChange={e => handleChange(e.target.value, idx)}
            onKeyDown={e => handleKeyDown(e, idx)}
            className="w-12 h-12 text-center text-xl border border-main rounded-lg focus:outline-none"
          />
        ))}
      </div>

      <p className="text-blue-900 font-medium">
        Resend code 00:{timer < 10 ? `0${timer}` : timer} Second
      </p>

      <button className="bg-main w-1/2 m-auto text-white py-3 rounded-4xl">VERIFY</button>
    </div>
  );
};

export default Verify;
