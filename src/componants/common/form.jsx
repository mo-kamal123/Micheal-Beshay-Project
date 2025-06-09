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
  });

  const handleChange = (key, e) => {
    const value = e?.target?.value || e;
    setFormData(prev => ({ ...prev, [key]: value }));
  };
  return (
    <div className="flex flex-col gap-4">
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
      <div className="flex flex-col gap-3">
        <label className="text-[#666C6F]" htmlFor="name">
          Email*
        </label>
        <input
          required
          className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your Email"
          onChange={e => handleChange('email', e)}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="block text-gray-700 mb-2">Phone number*</label>
        <PhoneInput
          country={'eg'}
          value={''}
          onChange={value => {
            handleChange('phone', value);
          }}
          inputStyle={{
            width: '100%',
            borderRadius: '30px',
            border: '1px solid #001f5e',
            padding: '0 60px',
          }}
          buttonStyle={{
            border: '1px solid #001f5e',
            borderRadius: '30px ',
            padding: '6px',
          }}
        />
      </div>
      {type === 'contact' && (
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="name">
            Leave your message*
          </label>
          <textarea
            required
            className="py-3 px-6 h-[150px] border border-main bg-white rounded-3xl font-light text-[14px] placeholder-[#ACACAC]"
            type="text"
            name="name"
            id="name"
            placeholder="leave your message"
            onChange={e => handleChange('message', e)}
          />
        </div>
      )}
      {type === 'coach' && (
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="name">
            How did you hear about us
          </label>
          <input
            required
            className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="text"
            name="name"
            id="name"
            placeholder="Facebook, instagram or google ads"
            onChange={e => handleChange('knowUs', e)}
          />
        </div>
      )}
      <button className="bg-main text-white py-3 rounded-4xl">SEND</button>
    </div>
  );
};

export default Form;
