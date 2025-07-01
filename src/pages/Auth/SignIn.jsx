import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAlternateEmail, MdPassword } from 'react-icons/md';
import { FaGoogle } from 'react-icons/fa';
import { IoLogIn } from 'react-icons/io5';

import Authlayout from '../../compents/layout/Authlayout';
import CustomInput from '../../compents/Inputs/CustomInput';
import GeneralCusBtn from '../../compents/Inputs/GeneralCusBtn';
import { colors } from '../../constant/color';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { validateEmail } from '../../utils/validate';
import toast from 'react-hot-toast';

import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/firebase';

import { AuthContext } from '../../context/AuthProvider';
import { UserContext } from '../../context/useContext';

const SignIn = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const { updateUserData } = useContext(UserContext);
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return alert("Please fill all the fields.");
    }

    if (!validateEmail(form.email)) {
      return alert("Please enter a valid email.");
    }

    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { ...form });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        setIsAuthenticated(true); // ✅ Important for redirect
        updateUserData(user);
        toast.success("Login successfully");
        navigate("/home");
      }
    } catch (error) {
      console.log("Login error:", error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  const handleToggle = () => {
    navigate("/signup");
  };

  const googleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        profilePic: user.photoURL,
      };

      const googleRes = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { userData });
      const { token, user: loggedUser } = googleRes.data;

      if (token) {
        localStorage.setItem("token", token);
        setIsAuthenticated(true); // ✅ Important for redirect
        updateUserData(loggedUser);
        toast.success("Successfully logged in");
        navigate("/home");
      }
    } catch (error) {
      console.error("Google login failed:", error.message);
      toast.error("Failed to log in with Google");
    }
  };

  return (
    <Authlayout>
      <div className='w-full mt-20 flex items-center justify-center'>
        <div className='lg:w-[80%] h-auto md:h-full flex flex-col justify-center'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-5xl text-white font-[700]' style={{ fontFamily: 'futura' }}>Hey,</h1>
            <h1 className='text-4xl font-[700] text-white' style={{ fontFamily: 'futura' }}>Welcome Back! 🚀</h1>
            <p className='text-white' style={{ fontFamily: 'futura' }}>Login to track your expenses easily... 🫦</p>
          </div>

          <form onSubmit={handleSubmit}>
            <CustomInput
              placeHolder="subhrokolay2@gmail.com"
              label="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              icons={<MdAlternateEmail />}
            />

            <CustomInput
              placeHolder="********"
              type="password"
              label="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              icons={<MdPassword />}
            />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <GeneralCusBtn
              type="submit"
              lefttIcon={<IoLogIn />}
              name="Welcome Back"
            />

            <p className="text-right mt-2" style={{ color: colors.primary, fontFamily: 'futura' }}>
              Forgot Password?
            </p>

            <GeneralCusBtn
              onClick={googleLogin}
              name="Sign in with Google"
              backgroundColors="#101010"
              lefttIcon={<FaGoogle />}
            />
          </form>

          <h1 className="text-white text-center mt-7" style={{ fontFamily: 'futura' }}>
            Don't have an account?{" "}
            <span onClick={handleToggle} style={{ color: colors.primary, fontFamily: 'futura', cursor: 'pointer' }}>
              Register
            </span>
          </h1>
        </div>
      </div>
    </Authlayout>
  );
};

export default SignIn;
