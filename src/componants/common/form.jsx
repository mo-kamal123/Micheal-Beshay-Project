import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Form = ({ type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    knowUs: '',
  }); // Initial state for form data

  /**
   * Handles input changes and updates the form data state.
   * @param {string} key - The field name to update (e.g., 'name', 'email', 'phone', 'message', 'knowUs').
   * @param {Event|string} e - The event object from input change or direct value for phone.
   */
  const handleChange = (key, e) => {
    const value = e?.target?.value || e;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Name Input */}
      <div className="flex flex-col gap-3">
        <label className="text-[#666C6F]" htmlFor="name">
          Name*
        </label>
        <input
          required
          className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          onChange={e => handleChange('name', e)}
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-3">
        <label className="text-[#666C6F]" htmlFor="email">
          Email*
        </label>
        <input
          required
          className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          onChange={e => handleChange('email', e)} //  Directly passing the event for email input
        />
      </div>

      {/* Phone Number Input using react-phone-input-2 */}
      <div className="flex flex-col gap-3">
        <label className="block text-gray-700 mb-2">Phone number*</label>
        <PhoneInput
          country={'eg'}
          value={formData.phone}
          onChange={value => handleChange('phone', value)} // Directly passing the value for phone input
          inputStyle={{
            width: '100%',
            borderRadius: '30px',
            border: '1px solid #001f5e',
            padding: '0 60px',
          }}
          buttonStyle={{
            border: '1px solid #001f5e',
            borderRadius: '30px',
            padding: '6px',
          }}
        />
      </div>

      {/* Conditional message textarea if type is "contact" */}
      {type === 'contact' && (
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="message">
            Leave your message*
          </label>
          <textarea
            required
            className="py-3 px-6 h-[150px] border border-main bg-white rounded-3xl font-light text-[14px] placeholder-[#ACACAC]"
            name="message"
            id="message"
            placeholder="Leave your message"
            onChange={e => handleChange('message', e)} // Directly passing the event for message textarea
          />
        </div>
      )}

      {/* Conditional input field if type is "coach" */}
      {type === 'coach' && (
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="knowUs">
            How did you hear about us
          </label>
          <input
            required
            className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="text"
            name="knowUs"
            id="knowUs"
            placeholder="Facebook, Instagram, or Google Ads"
            onChange={e => handleChange('knowUs', e)} // Directly passing the event for knowUs input
          />
        </div>
      )}

      {/* Submit Button */}
      <button className="bg-main text-white py-3 rounded-4xl">SEND</button>
    </div>
  );
};

export default Form;
