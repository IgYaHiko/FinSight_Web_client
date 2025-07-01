import React, { useState } from 'react';
import { colors } from '../../constant/color';
import Authlayout from '../../compents/layout/Authlayout';
import CustomInput from '../../compents/Inputs/CustomInput';
import { MdAlternateEmail, MdPassword } from "react-icons/md";
import GeneralCusBtn from '../../compents/Inputs/GeneralCusBtn';
import { FaGoogle, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useContext } from 'react';
import { UserContext } from '../../context/useContext';
import { validateEmail } from '../../utils/validate';
import { provider, auth } from '../../utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState(null);
  const router = useNavigate();
  const { updateUserData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill in all the fields before submitting.");
      return;
    }
    if (!validateEmail(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setError("");
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, { ...form });
      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUserData(user);
        router("/home");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response && error.response.data.message);
      } else {
        setError("Something went wrong, Server failed");
      }
    }
  };

  const toggle = () => {
    router("/signin");
  };

  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        profilePic: user.photoURL
      };

      const googleRes = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {userData});
      const { token, user: loggedInUser } = googleRes.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUserData(loggedInUser);
        toast.success("Successfully logged in");
        router("/home");
      }
    } catch (error) {
      console.error("Google login failed:", error);
      toast.error("failed to logged in")
    }
  };

  return (
    <Authlayout>
      <div className='w-full mt-5 flex items-center justify-center'>
        <div className='lg:w-[80%] h-auto md:h-full flex flex-col justify-center'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-5xl text-white font-[700]' style={{ fontFamily: 'futura' }}>Let's,</h1>
            <h1 className='text-4xl font-[700] text-white' style={{ fontFamily: 'futura' }}>Get Started !🚀</h1>
            <p className='text-white' style={{ fontFamily: 'futura' }}>Create an Account to Track your Expenses...👅</p>
          </div>

          <form onSubmit={handleSubmit}>
            <CustomInput
              label={"Name"}
              placeHolder={"Yahiko"}
              type={"text"}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              icons={<FaUserAlt size={14} />}
            />

            <CustomInput
              placeHolder={"subhrokolay2@gmail.com"}
              label={"Email"}
              type={"email"}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              icons={<MdAlternateEmail />}
            />

            <CustomInput
              placeHolder={"********"}
              type={"password"}
              label={"Password"}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              icons={<MdPassword />}
            />

            <GeneralCusBtn type='submit' name={"Create An Account 🚀"} />

            <p className='text-right mt-2' style={{ color: colors.primary, fontFamily: 'futura' }}>
              Forgot Password
            </p>

            <GeneralCusBtn
              onClick={googleLogin}
              name={"Sign In With Google"}
              backgroundColors={"#101010"}
              lefttIcon={<FaGoogle />}
            />
          </form>

          <h1 className='text-white text-center mt-7' style={{ fontFamily: 'futura' }}>
            Already have an account?{" "}
            <span
              onClick={toggle}
              style={{ color: colors.primary, fontFamily: 'futura', cursor: 'pointer' }}
            >
              Sign In
            </span>
          </h1>
        </div>
      </div>
    </Authlayout>
  );
};

export default SignUp;
