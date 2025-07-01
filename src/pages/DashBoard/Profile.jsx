import React, { useContext, useEffect, useState } from 'react';
import DashboardLayout from '../../compents/layout/DashboardLayout';
import { images } from '../../constant/images';
import { UserContext } from '../../context/useContext';
import { FaEdit } from "react-icons/fa";
import { colors } from '../../constant/color';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useNavigate } from 'react-router-dom';
import { LuTrendingDown, LuTrendingUp } from 'react-icons/lu';
import Modal from '../../compents/modals/Modal';
import AvatarWithEdit from '../../compents/avatar/AvatarWithEdit';
import CustomInput from '../../compents/Inputs/CustomInput';
import GeneralCusBtn from '../../compents/Inputs/GeneralCusBtn';
import { MdTipsAndUpdates } from "react-icons/md";
import { toast } from 'react-hot-toast';

const Profile = () => {
  const { user, updateUserData } = useContext(UserContext);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // Editable fields
  const [name, setName] = useState(user?.name || "");


  const navigate = useNavigate();

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
      if (response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.log("Data not found", error?.response?.data?.message || error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const userStats = {
    totalExpenses: data?.totalExpenses ? `₹${data.totalExpenses}` : '₹0',
    totalIncome: data?.totalIncome ? `₹${data.totalIncome}` : '₹0',
    joined: user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A',
  };

  const handleMoal = () => {
    setOpenModal(true);
  };

  const handleUpdateProfile = async () => {
    try {
      const res = await axiosInstance.put(API_PATHS.UPDATE.UPDATE_PROFILE, { name });
      if (res.data?.user) {
        updateUserData(res.data.user);
        toast.success("Profile updated");
        setOpenModal(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    }
  };

  if (!user) {
    return (
      <DashboardLayout>
        <div className="text-white text-center mt-10">Loading user profile...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div style={{ fontFamily: "futura" }} className="w-full flex justify-center mt-10 px-4">
        <div className="flex flex-col relative items-center space-y-6 bg-[#131313] px-8 py-10 rounded-xl shadow-md w-full max-w-md">
          <button onClick={handleMoal} className="mt-2 absolute right-3 top-2 flex items-center gap-2 bg-[#0065F8] hover:bg-[#0050c7] text-white justify-center text-sm font-medium p-4 rounded-full transition-all">
            <FaEdit />
          </button>

          <AvatarWithEdit initialImage={user?.profilePic || images.logo} />

          <div className="text-center space-y-2">
            <h1 className="text-white text-3xl font-semibold capitalize">{user.name} ❤️</h1>
            <p className="text-white text-md opacity-60">{user.email}</p>
            <p className="text-white text-sm opacity-40">Joined: {userStats.joined}</p>
          </div>

          <div className="w-full grid grid-cols-2 gap-4 mt-6">
            <div onClick={() => navigate("/income")} className="px-4 flex flex-col items-center justify-center py-3 bg-green-200 rounded-md text-center">
              <p className="text-sm text-green-900 mt-1">Total Income</p>
              <h2 className=" text-xl text-green-900 flex items-center gap-1 font-bold">{userStats.totalIncome} <LuTrendingUp /></h2>
            </div>
            <div onClick={() => navigate("/expense")} className="px-4 flex flex-col items-center justify-center py-3 rounded-md bg-red-200 text-center">
              <p className="text-sm text-red-900 opacity-60 mt-1">Total Expenses</p>
              <h2 className="text-red-900 text-xl flex items-center gap-2 font-bold">{userStats.totalExpenses} <LuTrendingDown /></h2>
            </div>
          </div>
        </div>

        <Modal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          title="Edit Profile"
          shorty={"Update your personal details"}
        >
          <CustomInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            label={"Name"}
          />
          <GeneralCusBtn
            onClick={handleUpdateProfile}
            name={"Update Details"}
            lefttIcon={<MdTipsAndUpdates color='white' />}
          />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
