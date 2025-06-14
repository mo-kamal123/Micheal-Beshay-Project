import React, { useState } from 'react';
import coach from '../../../assets/About-imgs/coach.jpg';
import { Link } from 'react-router-dom';
const DateSelection = () => {
  const [selectedMonth, setSelectedMonth] = useState('July 2025'); // Default selected month
  const [selectedDate, setSelectedDate] = useState('2025-07-16'); // Default selected date
  const [selectedTime, setSelectedTime] = useState('9:00pm'); // Default selected time
  // Sample data for dates and times
  const dates = [
    { day: 'Sun', date: 16 },
    { day: 'Mon', date: 17 },
    { day: 'Tue', date: 18 },
    { day: 'Wed', date: 19 },
    { day: 'Thu', date: 20 },
    { day: 'Fri', date: 21 },
    { day: 'Sat', date: 22 },
    { day: 'Sun', date: 23 },
    { day: 'Mon', date: 24 },
  ];

  const times = ['9:00pm', '4:45pm', '5:15pm', '5:30pm', '5:45pm', '6:00pm', '8:00pm'];

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-6 p-6 bg-white rounded-2xl w-[95%] md:w-[90%] my-20 m-auto min-h-screen">
      {/* Left Side */}
      <div className="md:w-[60%]">
        <h2 className="text-xl font-semibold mb-4">Select time</h2>

        <select
          className="mb-4 p-2 w-40 border border-[#DCE0E5] rounded"
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
        >
          <option>July 2025</option>
          {/* Add more months */}
        </select>

        <div className="flex gap-2 overflow-x-auto mb-6">
          {dates.map((d, i) => (
            <button
              key={i}
              onClick={() => setSelectedDate(`2025-07-${d.date}`)}
              className={`px-6 py-4 text-center border border-[#DCE0E5] rounded-2xl  ${
                selectedDate.endsWith(d.date.toString()) ? 'bg-main text-white' : 'bg-white'
              }`}
            >
              <div className="text-sm">{d.day}</div>
              <div className="font-semibold">{d.date}</div>
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {times.map((time, i) => (
            <div
              key={i}
              onClick={() => setSelectedTime(time)}
              className="flex justify-between items-center p-4 border-b border-[#D3D3D3] cursor-pointer"
            >
              <p className="font-bold">{time}</p>
              <div className={`w-6 h-6 rounded-full border mr-3 flex items-center justify-center`}>
                {selectedTime && (
                  <div
                    className={`w-3 h-3 rounded-full ${
                      selectedTime === time ? 'border-main bg-main' : 'border-gray-400'
                    } `}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full h-fit bg-white border border-[#E2E2E2] rounded p-4 shadow">
        <div className="flex justify-between items-center gap-4 mb-4">
          <div className="rounded-2xl overflow-hidden w-20 h-20">
            <img src={coach} alt="Coach" className="w-full h-full object-cover" />
          </div>
          <div>
            <p>
              {' '}
              session with <strong>(Amand Clar)</strong>
            </p>
            <p className="text-sm text-gray-500">Session: 1</p>
          </div>
          <span className="text-main font-bold">
            300 <span className="text-[8px]"> EGP </span>
          </span>
        </div>
        <Link
          to={'/confirm-booking'}
          className="w-full bg-main text-white flex justify-center py-2 rounded "
        >
          Book your time
        </Link>
      </div>
    </div>
  );
};

export default DateSelection;
