import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../store/auth-slice/auth-slice';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    email: '',
    username: '',
    phone: '',
    password: '',
  });
  const [disabled, setDisables] = useState(true);

  const handleChange = (key, e) => {
    const value = e.target?.value || e;
    const newRegisterData = { ...registerData, [key]: value };
    setRegisterData(newRegisterData);

    if (
      newRegisterData.username &&
      newRegisterData.password &&
      newRegisterData.phone &&
      newRegisterData.email
    ) {
      setDisables(false);
    } else {
      setDisables(true);
      console.log('full');
    }
  };

  const handleRegister = e => {
    e.preventDefault();
    console.log('full');
    if (
      registerData.username &&
      registerData.password &&
      registerData.phone &&
      registerData.email
    ) {
      console.log(registerData);
      dispatch(login());
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <p className="text-[#666C6F] text-[14px] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="email">
            Email Address
          </label>
          <input
            required
            onChange={e => handleChange('email', e)}
            className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="username">
            Username
          </label>
          <input
            required
            onChange={e => handleChange('username', e)}
            className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone number*
          </label>
          <PhoneInput
            inputProps={{ id: 'phone' }}
            country={'eg'}
            value={registerData?.phone || ''}
            onChange={phone => handleChange('phone', phone)}
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
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="password">
            Password*
          </label>
          <input
            required
            onChange={e => handleChange('password', e)}
            className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button disabled={disabled} className="bg-main w-1/2 m-auto text-white py-3 rounded-4xl">
          Create an account
        </button>
      </form>
    </div>
  );
}

export default Register;
