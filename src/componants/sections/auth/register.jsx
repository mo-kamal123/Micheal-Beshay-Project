import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../store/auth-slice/auth-slice';
import { useRegister } from '../../../hooks/auth-hooks/useRegisterQuery';
import { isPending } from '@reduxjs/toolkit';

/**
 * Register Component
 * Handles user input validation, form submission, and navigation to dashboard upon successful registration.
 **/

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* Registration form state   */
  const [registerData, setRegisterData] = useState({
    email: '',
    username: '',
    phone: '',
    password: '',
  });

  /* Button disabled state - prevents submission when form is incomplete   */
  const [disabled, setDisables] = useState(true);

  const { mutate, isPending, isError, isSuccess } = useRegister();

  /**
   * Handles input changes and performs real-time validation
   *
   * Updates the form state and enables/disables the submit button based on
   * whether all required fields are filled.
   *
   * @param {string} key - The field name to update ('email', 'username', 'phone', 'password')
   * @param {Event|string} e - The event object from input change or direct value for phone
   *
   * @example
   * // For regular inputs
   * handleChange('email', event)
   *
   * // For phone input (PhoneInput passes value directly)
   * handleChange('phone', '+201234567890')
   */
  const handleChange = (key, e) => {
    // Extract value from event object or use direct value (for PhoneInput)
    const value = e.target?.value || e;
    const newRegisterData = { ...registerData, [key]: value };
    setRegisterData(newRegisterData);

    // Validate all required fields are filled
    if (
      newRegisterData.username &&
      newRegisterData.password &&
      newRegisterData.phone &&
      newRegisterData.email
    ) {
      setDisables(false);
    } else {
      setDisables(true);
      console.log('full'); // TODO: Remove debug log
    }
  };

  /**
   * Handles form submission and user registration
   *
   * Validates form data, dispatches login action to Redux store,
   * and navigates to the dashboard upon successful registration.
   *
   * @param {Event} e - The form submission event
   *
   * @todo Implement actual API call for user registration
   * @todo Add error handling for failed registration attempts
   * @todo Add loading state during registration process
   */
  const handleRegister = e => {
    e.preventDefault();
    console.log('full'); // TODO: Remove debug log

    // Final validation before submission
    if (
      registerData.username &&
      registerData.password &&
      registerData.phone &&
      registerData.email
    ) {
      console.log(registerData); // TODO: Remove debug log and comment when real api is ready
      // mutate(registerData)
      // TODO: Replace with actual registration API call
      // Currently just dispatches login action as placeholder
      dispatch(login());
      navigate('/');
    }
    if (isSuccess) {
      // dispatch(login());
      // navigate('/');
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Form Description */}
      <p className="text-[#666C6F] text-[14px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* Registration Form */}
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        {/* Email Input Field */}
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

        {/* Username Input Field */}
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

        {/* Phone Number Input Field */}
        <div className="flex flex-col gap-3">
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone number*
          </label>
          <PhoneInput
            inputProps={{ id: 'phone' }}
            country={'eg'} // Default to Egypt
            value={registerData?.phone || ''}
            onChange={phone => handleChange('phone', phone)}
            inputStyle={{
              width: '100%',
              borderRadius: '30px',
              border: '1px solid #001f5e', // Custom border color (main theme)
              padding: '0 60px',
            }}
            buttonStyle={{
              border: '1px solid #001f5e',
              borderRadius: '30px',
              padding: '6px',
            }}
          />
        </div>

        {/* Password Input Field */}
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
        {isError && <div className="text-red-500">register failed. Please try again.</div>}
        {/* Submit Button */}
        <button
          disabled={disabled || isPending}
          className={`${isPending ? 'bg-main/50' : 'bg-main'} w-1/2 m-auto text-white py-3 rounded-4xl disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isPending ? 'sending...' : 'Create an account'}
        </button>
      </form>
    </div>
  );
}

export default Register;
