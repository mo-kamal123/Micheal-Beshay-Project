import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../store/auth-slice/auth-slice';
import { useState } from 'react';
import { useLogin } from '../../../hooks/auth-hooks/useLogin';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const { mutate, data, isError, isPending, isSuccess } = useLogin();

  /**
   * Handles changes to the login form fields.
   *
   * @param {string} key - The key representing the field being updated (e.g., 'username' or 'password').
   * @param {Object} e - The event object from the input field.
   * Updates the login data state with the new value and enables/disables the submit button
   * based on whether both username and password fields are filled.
   */
  const handleChange = (key, e) => {
    const value = e.target.value;
    const newLoginData = { ...loginData, [key]: value };
    setLoginData(newLoginData);

    // if (newLoginData.username && newLoginData.password) {
    //   setDisables(false);
    // } else {
    //   setDisables(true);
    // }
  };

  /**
   * Handles the login form submission.
   *
   * @param {Object} e - The event object from the form submission.
   * Prevents the default form submission behavior, validates the login data,
   * dispatches the login action, and navigates to the home page if successful.
   */
  const handleLogin = e => {
    e.preventDefault();
    if (loginData.username && loginData.password) {
      // Dispatch the login mutation with the login data
      mutate(loginData , {
        onSuccess: (data) => {
          if (data.success) {
            // Navigate to home page or dashboard after successful login
            dispatch(login());
            navigate('/');
          }
        },
      });
    }};

  return (
    <div className="flex flex-col gap-5">
      <p className="text-[#666C6F] text-[14px] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="email">
            Email*
          </label>
          <input
            required
            className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={e => handleChange('username', e)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[#666C6F]" htmlFor="password">
            Password*
          </label>
          <input
            required
            className="py-3 px-6 border border-main bg-white rounded-4xl font-light text-[14px] placeholder-[#ACACAC]"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={e => handleChange('password', e)}
          />
        </div>
        {isSuccess && !data?.success ? (
  <div className="text-red-500">{data.message}</div>
) : null}
        <button
          disabled={isPending}
          className={`${isPending ? 'bg-main/50' : 'bg-main'} w-1/2 m-auto text-white py-3 rounded-4xl`}
        >
          {isPending ? 'Logging in...' : 'SEND'}
        </button>
      </form>
    </div>
  );
};

export default Login;
