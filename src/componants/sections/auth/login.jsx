import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("loggedin", true);
    navigate("/");
  };
  return (
    <div className="flex flex-col gap-5">
      <p className="text-[#666C6F] text-[14px] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="name">
            Email*
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
        <button
          onClick={handleLogin}
          className="bg-main w-1/2 m-auto text-white py-3 rounded-4xl"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default Login;
