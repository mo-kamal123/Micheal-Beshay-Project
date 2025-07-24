import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/auth-slice/auth-slice";
import { useRegister } from "../../../hooks/auth-hooks/useRegister";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    full_name: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const { mutate, data, isPending, isSuccess, isError, error } = useRegister();

  /** Handle input changes and validate form fields */
  const handleChange = (key, e) => {
    const value = e.target.value;
    const updatedData = { ...registerData, [key]: value };
    setRegisterData(updatedData);

    // Enable button only if all fields are filled
    const allFieldsFilled =
      updatedData.full_name &&
      updatedData.email &&
      updatedData.password &&
      updatedData.password_confirmation;

    setIsDisabled(!allFieldsFilled);
  };

  /** Handle form submission */
  const handleRegister = (e) => {
    e.preventDefault();
    if (isDisabled) return; // Prevent submission if form invalid

    mutate(registerData, {
      onSuccess: (response) => {
        console.log(response);
        if (response.status === 'verification_required') {
          // dispatch(login());
          navigate(`/auth/verify?email=${registerData?.email}`); // ✅ Navigate only if success = true
        }
      },
    });
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Form Description */}
      <p className="text-[#666C6F] text-[14px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      {/* Registration Form */}
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        {/* Email */}
        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => handleChange("email", e)}
        />

        {/* Username */}
        <InputField
          label="Username"
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={(e) => handleChange("full_name", e)}
        />

        {/* Password */}
        <InputField
          label="Password*"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => handleChange("password", e)}
        />

        {/* Password Confirmation */}
        <InputField
          label="Password confirmation*"
          type="password"
          name="password_confirmation"
          placeholder="Enter your password again"
          onChange={(e) => handleChange("password_confirmation", e)}
        />

        {/* Show API Error or Info */}
        {isSuccess && data && !data.success && (
          <div className="text-red-500 text-sm">{data.message}</div>
        )}
        {isError && (
          <div className="text-red-500 text-sm">
            {error?.message || "Something went wrong"}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isDisabled || isPending}
          className={`${
            isPending ? "bg-main/50" : "bg-main"
          } w-1/2 m-auto text-white py-3 rounded-4xl disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isPending ? "Sending..." : "Create an account"}
        </button>
      </form>
    </div>
  );
}

/** Reusable Input Component */
const InputField = ({ label, ...props }) => (
  <div className="flex flex-col gap-3">
    <label className="text-[#666C6F]" htmlFor={props.name}>
      {label}
    </label>
    <input
      {...props}
      required
      className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
    />
  </div>
);

export default Register;
