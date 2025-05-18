import React from "react";
import PhoneInput from "react-phone-input-2";

function Register() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-[#666C6F] text-[14px] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="name">
            Email Address
          </label>
          <input
            required
            className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="name">
            User name
          </label>
          <input
            required
            className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="block text-gray-700 mb-2">Phone number*</label>
          <PhoneInput
            country={"eg"}
            value={''}
            inputStyle={{
              width: "100%",
              borderRadius: "30px",
              border: "1px solid #001f5e",
              padding: "0 60px",
            }}
            buttonStyle={{
              border: "1px solid #001f5e",
              borderRadius: "30px ",
              padding: "6px",
            }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="name">
            Password*
          </label>
          <input
            required
            className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="bg-main w-1/2 m-auto text-white py-3 rounded-4xl">
          Create an account
        </button>
      </div>
    </div>
  );
}

export default Register;
