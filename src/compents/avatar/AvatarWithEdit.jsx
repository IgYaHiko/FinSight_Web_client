import React, { useRef, useState, useContext } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import uploadImages from '../../utils/uploadImages';
import axiosInstance from '../../utils/axiosInstance';
import { toast } from 'react-hot-toast';
import { UserContext } from '../../context/useContext';

const AvatarWithEdit = ({ initialImage }) => {
  const { user, updateUserData } = useContext(UserContext); // ✅
  const [imageUrl, setImageUrl] = useState(initialImage || user?.profilePic);
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const uploadAndSaveImage = async (file) => {
    try {
      const result = await uploadImages(file); // { imageUrl }
      setImageUrl(result.imageUrl);

      // Save new image URL to DB
      const res = await axiosInstance.put("/api/v1/auth/update-image", {
        imageUrl: result.imageUrl,
      });

      // ✅ Update context & localStorage
      updateUserData({
        ...user,
        profilePic: result.imageUrl,
      });

      toast.success("Profile image updated successfully");
    } catch (error) {
      console.error("Image update failed", error);
      toast.error("Image update failed");
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    await uploadAndSaveImage(file);
    setUploading(false);
  };

  return (
    <div className="relative w-[250px] h-[250px]">
      <img
        src={imageUrl}
        alt="Avatar"
        className="w-full h-full rounded-full object-cover ring-4 ring-blue-500 shadow-lg"
      />
      <button
        onClick={handleImageClick}
        className="absolute bottom-3 right-3 bg-[#0065F8] p-4 rounded-full hover:bg-[#0050c7] transition-all"
        title="Edit avatar"
      >
        <FaPencilAlt color="#fff" size={16} />
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
      {uploading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-sm rounded-full">
          Uploading...
        </div>
      )}
    </div>
  );
};

export default AvatarWithEdit;
