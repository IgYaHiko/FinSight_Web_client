import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImages = async (uploadImage) => {
  const formData = new FormData();
  formData.append("image", uploadImage);

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // should contain { url: "https://..." }
  } catch (error) {
    console.log("Error uploading image", error?.response?.data || error.message);
    throw error;
  }
};

export default uploadImages;
