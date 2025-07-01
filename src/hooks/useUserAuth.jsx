  
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import { UserContext } from "../context/useContext"; // Adjust path as needed

const useUserAuth = () => {
  const { user, updateUserData, clearUserData } = useContext(UserContext);
  const navigate = useNavigate();

 const useUserAuth = () => {
  const { user, updateUserData, clearUserData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (user || !token) return;

    let isMounted = true;

    const fetchInfo = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
        if (isMounted && response.data) {
          updateUserData(response.data);
        }
      } catch (error) {
        console.log("❌ Failed to fetch user data");
        clearUserData();
        navigate("/signin");
      }
    };

    fetchInfo();

    return () => {
      isMounted = false;
    };
  }, [user, updateUserData, clearUserData, navigate]);
};

};

export default useUserAuth;
