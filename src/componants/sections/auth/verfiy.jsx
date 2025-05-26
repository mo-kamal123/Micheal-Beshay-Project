import { useEffect, useRef, useState } from 'react';

const Verify = () => {
  const [code, setCode] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState(59);
  const inputsRef = useRef([]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 500);
    return () => clearInterval(countdown);
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Only digits
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
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
